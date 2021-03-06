/**
 * The MIT License (MIT)

 Copyright (c) 2016-2017 Zygimantas Benetis <itcom@esnlithuania.org>
 Copyright (c) 2015-2016 Dmitriy Shekhovtsov <valorkin@gmail.com>
 Copyright (c) 2015-2016 Valor Software

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { AuthService } from '../../services/auth.service';

interface Column {
  title: string,
  name: string,
  type: 'text' | 'select',
  sort?: 'desc' | 'asc' | '',
}

export interface SelectValue {
  id: number,
  name: string
}

@Component({
  selector: 'esn-dashboard-manage-users',
  templateUrl: 'manage-users.component.html',
  styleUrls: ['manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  public rows: Array<any> = [];
  public columns: Array<Column> = [
    {
      title: 'Name',
      name: 'name',
      sort: 'desc',
      type: 'text'
    },
    {
      title: 'Surname',
      name: 'surname',
      type: 'text'
    },
    {
      title: 'Section',
      name: 'section',
      type: 'select'
    },
    {
      title: 'Role',
      name: 'role',
      type: 'select'
    }
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
  };

  public sections: Array<any> = [];
  public roles: Array<any> = [];
  private data: Array<User> = [];

  private editableRowNumber: -1 | number = -1;
  private editableRow: Array<any> = [];

  constructor(private userService: UserService, private authService: AuthService) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    const tagsNotToInteractWith = ['INPUT', 'I', 'TH', 'SELECT', 'OPTION'];
    const interact = tagsNotToInteractWith.reduce((result, item) => {
      return result && targetElement.tagName != item;
    }, true);

    if (interact) {
      this.updateUser();
      this.editableRowNumber = -1;
    }

  }

  public ngOnInit() {
    this.loadUsers();
    this.loadSections();
    this.loadRoles();
  }

  public loadUsers() {
    this.userService
        .getUsers()
        .subscribe((data) => {
          const sections: Promise<any> = this.userService.getSections()
                                             .toPromise();
          sections.then((sections) => {

            this.data = data.map((user) => {
              return <User>{
                id: user.id,
                name: user.name,
                surname: user.surname,
                position: user.position_id,
                section: {
                  id: user.section_id,
                  name: getSectionName(user.section_id)
                },
                phoneNumber: user.phone_number,
                email: user.email,
                role: getRole(user),
              }
            });

            function getRole(user) {
              const role =
                user.roles.length > 0
                  ? {
                    id: user.roles[0].id,
                    name: user.roles[0].name
                  }
                  : {
                  id: 1,
                  name: 'None'
                };

              return role;
            }

            function getSectionName(id) {
              const section = sections.find((section) => {
                return section.id == id;
              });

              if(section) {
                return section.name;
              } else {
                return 'No such section'
              }
            }

            this.onChangeTable(this.config);
          });
        })
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1
      ? (start + page.itemsPerPage)
      : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }
    const columns = this.config.sorting.columns || [];

    const columnWithSort: Column = columns.find((column: Column) => {
      /* Checking if sort prop exists and column needs to be sorted */
      if (column.hasOwnProperty('sort') && column.sort !== '') {
        return true;
      }
    });

    return data.sort((previous: any, current: any) => {
      if (previous[columnWithSort.name] > current[columnWithSort.name]) {
        return columnWithSort.sort === 'desc'
          ? -1
          : 1;
      } else if (previous[columnWithSort.name] < current[columnWithSort.name]) {
        return columnWithSort.sort === 'asc'
          ? -1
          : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    const filterString = config.filtering.filterString;

    const filteredData = data.filter((user: User) => {
      //return true if some column matches filterString
      return this.columns.find((column: Column) => {
        switch (column.type) {
          case 'text':
            return user[column.name].includes(filterString);
          case 'select':
            const columnData: SelectValue = user[column.name];
            return columnData.name.includes(filterString);
        }
      });

    });

    return filteredData;
  }

  public onChangeTable(config: any, pageNumber?: number): any {
    const page: {itemsPerPage: number, page: number} = {
      itemsPerPage: this.itemsPerPage,
      page: pageNumber
        ? pageNumber
        : 1
    };
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging
      ? this.changePage(page, sortedData)
      : sortedData;
    this.length = sortedData.length;
  }

  public getData(row: any, column: Column): string {
    if (!row) {
      return ''
    }
    return row[column.name];
  }

  public columnSortWay(column: Column): 'asc' | 'desc' | '' {
    if (column.sort || column.sort !== '') {
      return column.sort;
    } else {
      return '';
    }
  }

  public sortByColumn(columnToSort: Column) {
    const sorting: Array<Column> = Object.assign({}, this.config.sorting).columns;

    const sorted = sorting.map((column: Column) => {
      if (columnToSort.name === column.name) {
        const newSort = column.sort === 'asc'
          ? 'desc'
          : 'asc';
        return Object.assign(column, {sort: newSort});
      } else {
        return Object.assign(column, {sort: ''});
      }
    });

    const config = Object.assign({}, this.config, {
      sorting: {columns: sorted}
    });
    this.page = 1;
    this.onChangeTable(config);
  }

  public enableEditing(row: number) {
    this.editableRowNumber = row;
    this.editableRow = this.rows[this.editableRowNumber];
  }

  public updateEditableRowData(data: any, column: Column) {
    if (column.type === 'select') {
      this.editableRow[column.name] = this.selectValueById(data, column);
    } else {
      this.editableRow[column.name] = data;
    }
  }

  public getOptions(column: Column) {
    return this.getSelectValues(column);
  }

  private updateUser() {
    if (this.editableRowNumber !== -1) {
      const originalUser = this.rows[this.editableRowNumber];
      const updatedUser = <User>Object.assign(originalUser, this.editableRow);
      this.userService
          .updateUser(updatedUser)
    }
  }

  private loadSections() {
    this.userService
        .getSections()
        .subscribe((data: Array<SelectValue>) => {
          this.sections = data;
        })
  }

  private loadRoles() {
    this.authService
        .roles()
        .subscribe((data: Array<SelectValue>) => {
          this.roles = data;
        })
  }

  private selectValueById(id: number, column: Column): SelectValue {
    const values = this.getSelectValues(column);
    return getSelectValue(id, values);

    function getSelectValue(id, arr) {
      return arr.find((value: SelectValue) => {
        return value.id == id;
      });
    }
  }

  private getSelectValues(column: Column) {
    switch (column.name) {
      case 'role':
        return this.roles;
      case 'section':
        return this.sections;
    }
  }
}

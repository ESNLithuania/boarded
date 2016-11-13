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
import { User, Address } from '../../classes/user';

interface Column {
  title: string,
  name: string,
  type: 'text' | 'select',
  sort?: 'desc' | 'asc' | '',
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
  private data: Array<User> = [];

  private editableRowNumber: -1 | number = -1;
  private editableRow: Array<any> = [];

  constructor(private userService: UserService) {
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
  }

  public loadUsers() {
    this.userService
        .getUsers()
        .subscribe((data) => {
          this.data = data.map((user) => {
            return new User(user.id, user.name, user.surname, user.section_id, user.position_id, user.phone_number, user.email, user.date_of_birth, new Address(user.street_address, user.street_building, user.city));
          });
          this.onChangeTable(this.config);
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
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString()
                             .match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

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
    this.editableRow[column.name] = data;
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
      .subscribe((data: Array<{id: number, name: string}>) => {
        this.sections = data;
      })
  }

  public getSelectValue(row, column: Column): string {
    const id = this.getData(row, column);

    const section = this.sections.find(_=> _.id == id);

    if(section) {
      return section.name
    } else {
      return id;
    }
  }

}

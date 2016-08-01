import {Component} from '@angular/core';
import {fakeAsync, TestComponentBuilder, inject, tick} from "@angular/core/testing";

@Component({
    selector: 'test-test',
    template: `test`
})
export class TestComponent {}

describe('navbar component', () => {
    it('should initialize', () => {
        expect(true).toBe(true);
    });

    it('Should work',
        fakeAsync(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
            tcb.createAsync(TestComponent).then(fixture => {
                tick(2000);
                fixture.detectChanges();
                expect(true).toBe(true);
            });
        }))
    );
});

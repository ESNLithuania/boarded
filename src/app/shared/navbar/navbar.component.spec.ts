import {TestComponentBuilder, tick, inject, fakeAsync} from '@angular/core/testing';
import {Component} from '@angular/core';

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
                expect(true).toBe(false);
            });
        }))
    );
});

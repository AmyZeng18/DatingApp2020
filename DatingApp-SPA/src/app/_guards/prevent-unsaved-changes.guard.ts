import {Injectable} from '@angular/core';
import { MemberListComponent } from '../members/member-list/member-list.component';
import { MemberEditResolver } from '../_resolvers/member-edit.resolver';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent>{
    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want ot continue? Any unsaved changes will be lost');
        }
        return true;
    }
}
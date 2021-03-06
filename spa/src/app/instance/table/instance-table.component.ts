import {Component, Input} from '@angular/core';
import {GetInstanceListQueryInstanceFieldItemInterface} from '../list/get-instance-list.query';

@Component({
    selector: 'app-instance-table',
    templateUrl: './instance-table.component.html',
    styles: []
})
export class InstanceTableComponent {

    @Input() instances: GetInstanceListQueryInstanceFieldItemInterface[];

}

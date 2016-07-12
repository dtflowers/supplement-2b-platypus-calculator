import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};

    add():void {
        if (this.context.operand1 === null || this.context.operand2 === null) {
            alert('Please enter values in both fields.');
        } else if (this.context.operand1 === undefined || this.context.operand2 === undefined) {
            alert('Please enter valid values in both fields.');
        } else if (this.context.operand1 === '' || this.context.operand2 === '') {
            alert('Please enter values in both fields.');
        } else {
            let sum: number = Number(this.context.operand1) + Number(this.context.operand2);
            this.context.operation = 'adding';
            this.context.answer = sum;
            this.context.statement = 'The result of ' + this.context.operation + ' ' + this.context.operand1 + ' and ' + this.context.operand2 + ' is ' + this.context.answer + '.';
            this.context.operand1 = null;
            this.context.operand2 = null; 
        }
    }
    subtract():void {
        if (this.context.operand1 === null || this.context.operand2 === null) {
            alert('Please enter values in both fields.');
        } else if (this.context.operand1 === undefined || this.context.operand2 === undefined) {
            alert('Please enter valid values in both fields.');
        }  else if (this.context.operand1 === '' || this.context.operand2 === '') {
            alert('Please enter values in both fields.');
        } else {
            let diff: number = Number(this.context.operand1) - Number(this.context.operand2);
            this.context.operation = 'subtracting';
            this.context.answer = diff;
            this.context.statement = 'The result of ' + this.context.operation + ' ' + this.context.operand2 + ' from ' + this.context.operand1 + ' is ' + this.context.answer + '.';
            this.context.operand1 = null;
            this.context.operand2 = null; 
        }
    }
    multiply():void {
        if (this.context.operand1 === null || this.context.operand2 === null) {
            alert('Please enter values in both fields.');
        } else if (this.context.operand1 === undefined || this.context.operand2 === undefined) {
            alert('Please enter valid values in both fields.');
        }  else if (this.context.operand1 === '' || this.context.operand2 === '') {
            alert('Please enter values in both fields.');
        } else {
            let prod: number = Number(this.context.operand1) * Number(this.context.operand2);
            this.context.operation = 'multiplying';
            this.context.answer = prod;
            this.context.statement = 'The result of ' + this.context.operation + ' ' + this.context.operand1 + ' and ' + this.context.operand2 + ' is ' + this.context.answer + '.';
            this.context.operand1 = null;
            this.context.operand2 = null; 
        }
    }
    divide():void {
        if (this.context.operand1 === null || this.context.operand2 === null) {
            alert('Please enter values in both fields.');
        } else if (this.context.operand1 === undefined || this.context.operand2 === undefined) {
            alert('Please enter valid values in both fields.');
        } else if (Number(this.context.operand2) === 0) {
            alert('You cannot divide a number by 0. Please submit a valid divisor.');
        }  else if (this.context.operand1 === '' || this.context.operand2 === '') {
            alert('Please enter values in both fields.');
        } else {
            let quot: number = Number(this.context.operand1) / Number(this.context.operand2);
            this.context.operation = 'dividing';
            this.context.answer = quot;
            this.context.statement = 'The result of ' + this.context.operation + ' ' + this.context.operand1 + ' by ' + this.context.operand2 + ' is ' + this.context.answer + '.';
            this.context.operand1 = null;
            this.context.operand2 = null; 
        }
    }

}

register.viewControl('home-vc', HomeViewControl);

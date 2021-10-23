import 'regenerator-runtime/runtime'
import { mount } from '@vue/test-utils';
import { it } from '@jest/globals';
import Calc from '../components/Calc.vue';
import cons from 'consolidate';

describe('Test Calc', () =>{
    it('Test first operand input value', ()=>{
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("1");
          
        expect(wrapper.vm.op1).toBe(1);
    });

    it('Test second operand input value', ()=>{
        const wrapper = mount(Calc);
        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");
        
        expect(wrapper.vm.op2).toBe(2);
    });

    it('Test method sum', ()=>{
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("1");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const methodSum = wrapper.find('button[name="+"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    });

    it('Test method sub', ()=>{
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("5");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const methodSub = wrapper.find('button[name="-"]')
        methodSub.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    });

    it('Test method div', ()=>{
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("8");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const methodDiv = wrapper.find('button[name="/"]')
        methodDiv.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    });

    it('Test method div to 0', ()=>{
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("8");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("0");

        const methodDiv = wrapper.find('button[name="/"]')
        methodDiv.trigger('click')

        expect(wrapper.vm.error).toBe('На ноль делить нельзя!')
    });

    it('Test method multi', ()=>{
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("8");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const methodMulti = wrapper.find('button[name="*"]')
        methodMulti.trigger('click')

        expect(wrapper.vm.result).toBe(16)
    });

    it('Test method exp', ()=>{
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("8");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const methodExp = wrapper.find('button[name="^"]')
        methodExp.trigger('click')

        expect(wrapper.vm.result).toBe(64)
    });
    it('Test method integerDiv', ()=>{
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("7");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const integerDiv = wrapper.find('button[name="//"]')
        integerDiv.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    });

    it('Test method integerDiv to 0', ()=>{
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.setValue("7");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("0");

        const integerDiv = wrapper.find('button[name="//"]')
        integerDiv.trigger('click')

        expect(wrapper.vm.error).toBe('На ноль делить нельзя!')
    });

    it('Test show virtual keyboard', async ()=>{
        const wrapper = mount(Calc);

        const showKeyboard = wrapper.find('input[name="showKeyboard"]');

        await showKeyboard.setChecked()

        expect(wrapper.vm.check).toBe(true)
    });

    it('Test keys of virtual keyboard', async ()=>{
        const wrapper = mount(Calc);

        const keys = wrapper.find('button[title="4"]');
        const checkOp1 = wrapper.find('input[name="checkOperand1"]');

        await checkOp1.setChecked()
        keys.trigger('click')

        expect(wrapper.vm.op1).toBe(4)
    });

    it('Test Delete simbol of virtual keyboard', async ()=>{
        const wrapper = mount(Calc);

        const delSimbol = wrapper.find('button[name="delSimbol"]');
        const checkOp2 = wrapper.find('input[name="checkOperand2"]');
        const operand2 = wrapper.find("input[name=operand2]");

        await checkOp2.setChecked()

        operand2.setValue("22");
        delSimbol.trigger('click')

        expect(wrapper.vm.op2).toBe(2)
    });
});
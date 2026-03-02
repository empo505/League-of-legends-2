/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils';
import Cbutton from '../components/Cbutton.vue';

describe('Cbutton.vue', () => {
  it('renderar innehållet som skickas till slotten', () => {
    const buttonText = 'KLICKA HÄR';
    const wrapper = mount(Cbutton, {
      slots: {
        default: buttonText
      }
    });

    // Kontrollera att texten finns inuti knappen
    expect(wrapper.text()).toContain(buttonText);
  });

  it('skickar vidare klick-eventet (v-bind="$attrs")', async () => {
    const wrapper = mount(Cbutton);

    // Simulera ett klick på knappen
    await wrapper.trigger('click');

    // Kontrollera att ett 'click'-event har emitterats
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('har den korrekta CSS-klassen för styling', () => {
    const wrapper = mount(Cbutton);
    
    // Kontrollera att den har hextech-klassen
    expect(wrapper.classes()).toContain('hextech-button');
  });
});
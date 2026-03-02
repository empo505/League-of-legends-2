
import { mount } from '@vue/test-utils';
import Counter from '../components/Cbutton.vue';

describe('Cbutton.vue', () => {
  it('renderar startvärdet och ökar på klick', async () => {
    const wrapper = mount(Counter);

    const countEl = wrapper.get('[data-testid="count"]');
    expect(countEl.text()).toBe('Count: 0');

    await wrapper.get('[data-testid="inc"]').trigger('click');
    expect(wrapper.get('[data-testid="count"]').text()).toBe('Count: 1');
  });
});

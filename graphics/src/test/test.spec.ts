import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { vue_game } from '../graph_traverse_return'; 
import { game_test } from '../story'; 
import Cbutton from '../components/Cbutton.vue';

const timer = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

describe('Tests functions', () => {
  
  test('Displays start screen text', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Welcome to game!')
  })

  test('Path that leads to node 17', () => {
    const steg1 = vue_game(game_test, 0, 0);
    expect(steg1.nextNode).toBe(1);

    const steg2 = vue_game(game_test, 1, 1);
    expect(steg2.nextNode).toBe(5);

    const steg3 = vue_game(game_test, 5, 0);
    expect(steg3.nextNode).toBe(8);

    const steg4 = vue_game(game_test, 8, 0);
    expect(steg4.nextNode).toBe(13);

    const steg5 = vue_game(game_test, 13, 0);
    expect(steg5.nextNode).toBe(17);
    expect(game_test.story[17]).toStrictEqual(["The camp people are friendly! They take you in and care for you, you manage to survive this strange world happily ever after"]);
  });

  test('Path that leads to node 18', () => {
    const steg1 = vue_game(game_test, 0, 2);
    expect(steg1.nextNode).toBe(3);

    const steg2 = vue_game(game_test, 3, 1);
    expect(steg2.nextNode).toBe(7);

    const steg3 = vue_game(game_test, 7, 1);
    expect(steg3.nextNode).toBe(11);

    const steg4 = vue_game(game_test, 11, 1);
    expect(steg4.nextNode).toBe(16);

    const steg5 = vue_game(game_test, 16, 1);
    expect(steg5.nextNode).toBe(18);
    expect(game_test.story[18]).toStrictEqual(["As you keep wandering you stumble upon a house, it comes to you that it is your old house! There your family waits and you live happily ever after"]);
  });

  test('Background changer works', () => {

    const startNode = vue_game(game_test, 0, 0); 
    expect(startNode.image).toStrictEqual(["/background2.webp", "/background2.webp"]);

    const stepToNode2 = vue_game(game_test, 0, 1);
    expect(stepToNode2.nextNode).toBe(2);
    const nextImage = game_test.images[stepToNode2.nextNode!]
 
    expect(nextImage).toStrictEqual(["/background1.png", "/gräs.avif"]);
  });

  test('Returns empty string if no background image exists', () => {
    const brokenGame = {
      ...game_test,
      images: [] 
    };

    const result = vue_game(brokenGame, 0, 0);
    expect(result.image).toStrictEqual([]);

  });

  test('Gradually fills the story text, typewriter works as intended', async () => {
    const wrapper = mount(App)

    const startButton = wrapper.findComponent({ name: 'Cbutton' })
    await startButton.trigger('click')

    expect(wrapper.find('.story-card p').text()).toBe("")

    await timer(100)
    
    const textPartial = wrapper.find('.story-card p').text()
    expect(textPartial.length).toBeGreaterThan(0)
    expect(textPartial.length).toBeLessThan(10)
  })

  test('Checks that graph traverse and graphics co-operate', async () => {
    const wrapper = mount(App)

    const startButton = wrapper.findComponent({ name: 'Cbutton' })
    await startButton.trigger('click')

    await timer(500) 

    const firstNodeText = wrapper.find('.story-card').text()
    expect(firstNodeText).not.toBe("")

    const nextbutton = wrapper.findComponent({ name: 'Cbutton'})
    expect(nextbutton.exists()).toBe(true)

    await nextbutton.trigger('click')

    await timer(500)

    const secondNodeText = wrapper.find('.story-card').text()
    expect(secondNodeText).not.toBe(firstNodeText)
  })

});
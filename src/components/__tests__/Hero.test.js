import { describe, it, expect, vi } from "vitest";
import Hero from '../Hero.vue'
import { mount } from "@vue/test-utils";

describe('Hero.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Hero);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays correct example call for PNG image', () => {
    const wrapper = mount(Hero);
    const pngExample = wrapper.find('img[src*=".png"]');
    expect(pngExample.exists()).toBe(true);
    expect(pngExample.attributes('src')).toContain('Derby%20County.png');
  });

  it('displays correct example call for JPEG image', () => {
    const wrapper = mount(Hero);
    const jpegExample = wrapper.find('img[src*=".jpeg"]');
    expect(jpegExample.exists()).toBe(true);
    expect(jpegExample.attributes('src')).toContain('Derby%20County.jpeg');
  });

});

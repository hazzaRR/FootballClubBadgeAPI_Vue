import { describe, it, expect, vi } from "vitest";
import Footer from '../Footer.vue'
import { mount } from "@vue/test-utils";

describe('Footer.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Footer);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains three lists', () => {
    const wrapper = mount(Footer);
    const lists = wrapper.findAll('ul');
    expect(lists).toHaveLength(3);
  });

  it('displays parameter information correctly', () => {
    const wrapper = mount(Footer);
    // Check if parameter headings are displayed
    expect(wrapper.text()).toContain('Parameters');
    expect(wrapper.text()).toContain('Sizing');
    expect(wrapper.text()).toContain('Format');

    // Check if parameter details are displayed correctly
    expect(wrapper.text()).toContain('width: int (default=100)');
    expect(wrapper.text()).toContain('height: int (default=100)');
    expect(wrapper.text()).toContain('padding: boolean (default=false)');
    expect(wrapper.text()).toContain('grayscale: boolean (default=false)');
    
    expect(wrapper.text()).toContain('64x64');
    expect(wrapper.text()).toContain('100x100');
    expect(wrapper.text()).toContain('150x150');
    expect(wrapper.text()).toContain('250x250');
    
    expect(wrapper.text()).toContain('.png');
    expect(wrapper.text()).toContain('.jpeg');
  });

});

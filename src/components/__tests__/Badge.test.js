import { describe, it, expect } from "vitest";
import Badge from '../Badge.vue';
import { mount } from "@vue/test-utils";

describe('Badge.vue', () => {
    it('renders team name correctly', () => {
      const teamName = 'Derby County';
      const wrapper = mount(Badge, {
        props: {
          teamName
        }
      });
      expect(wrapper.text()).toContain(teamName);
    });

    it("prop passed properly", async () => {
        const teamName = 'Derby County';
        const wrapper = mount(Badge, {
          props: {
            teamName
          }
        });
        expect(wrapper.props().teamName).toContain('Derby County');
      });
  
    it('changes badge image on hover', async () => {
      const teamName = 'Test Team';
      const wrapper = mount(Badge, {
        props: {
          teamName
        }
      });
  
      // Simulate mouseover
      await wrapper.trigger('mouseover');
      expect(wrapper.find('img').attributes('src')).toContain('grayscale=true');
  
      // Simulate mouseleave
      await wrapper.trigger('mouseleave');
      expect(wrapper.find('img').attributes('src')).not.toContain('grayscale=false');
    });
  });
import { defineType, defineField } from 'sanity';
import { blockContent } from './blog';
export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({ name: 'en', title: 'English', type: 'string' }),
        defineField({ name: 'fr', title: 'French', type: 'string' }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        // Use type 'blockContent' here to enable rich text editor
        defineField({ name: 'en', title: 'English', type: 'blockContent' }),
        defineField({ name: 'fr', title: 'French', type: 'blockContent' }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Innovation', value: 'innovation' },
          { title: 'Business', value: 'business' },
          { title: 'Development', value: 'development' },
        ],
        layout: 'radio',
      },
    }),
  ],
});

// lib
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'imageCover',
      title: 'Image Cover',
      type: 'image',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'array',
      of: [
        {
          name: 'portfolioItem',
          type: 'object',
          fields: [
            {
              name: 'position',
              title: 'Position',
              type: 'string',
            },
            {
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'date',
            },
            {
              name: 'description',
              title: "Description",
              type: 'text',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
    },
  },
})

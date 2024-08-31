import type { CollectionConfig } from 'payload'

import { rowFieldsSlug } from '../../slugs.js'

const RowFields: CollectionConfig = {
  slug: rowFieldsSlug,
  versions: true,
  admin: {
    defaultColumns: ['title', 'id'],
  },
  fields: [
    {
      name: 'id',
      label: 'Custom ID',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Title within a row',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'field_with_width_a',
          label: 'Field with 50% width',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'field_with_width_b',
          label: 'Field with 50% width',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'field_with_width_30_percent',
          label: 'Field with 30% width',
          type: 'text',
          admin: {
            width: '30%',
          },
        },
        {
          name: 'field_with_width_60_percent',
          label: 'Field with 60% width',
          type: 'text',
          admin: {
            width: '60%',
          },
        },
        {
          name: 'field_with_width_20_percent',
          label: 'Field with 20% width',
          type: 'text',
          admin: {
            width: '20%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          label: 'Collapsible within a row',
          type: 'collapsible',
          fields: [
            {
              name: 'field_within_collapsible_a',
              label: 'Field within collapsible',
              type: 'text',
            },
          ],
          admin: {
            width: '30%',
          },
        },
        {
          label: 'Collapsible within a row',
          type: 'collapsible',
          fields: [
            {
              name: 'field_within_collapsible_b',
              label: 'Field within collapsible',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}

export default RowFields

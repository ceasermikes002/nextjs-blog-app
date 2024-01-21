// schemas/blog.ts
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of article'
      },
      {
        name: 'slug',
        type: 'slug',   
        title: 'Slug of your blog article',
        options: {
            source: 'title',
        }
      },
      {
        name: 'titleImage',
        type: 'image',
        title: "Main image for the post"
      },
      {
        name: 'smallDescription',
        type: 'text',
        title: 'Small description for the post'
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
            {type: 'block'},
        ]
      }
    ]
  }
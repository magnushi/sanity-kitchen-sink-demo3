export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7616105d41cd7492f87bd6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-demo-3-studio',
                  apiId: '02d07c10-cc3c-45e0-8a15-32bee6ed6474'
                },
                {
                  buildHookId: '5f76161012c3488007bbefdf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-demo-3',
                  apiId: 'e684b305-edaf-49f3-b31e-3ed407ea7473'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-kitchen-sink-demo3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-demo-3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

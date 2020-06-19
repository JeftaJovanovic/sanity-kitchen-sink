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
                  buildHookId: '5eec6c1a9271ba678ae1facf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-41wjpgov',
                  apiId: 'dd24b680-ec0b-46dc-823e-c67497e2f2ca'
                },
                {
                  buildHookId: '5eec6c1a0ef2aa14d104873d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5b6rabtb',
                  apiId: '20fffb79-3456-4e9f-aa86-bd7bb685c789'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JeftaJovanovic/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5b6rabtb.netlify.app', category: 'apps'}
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

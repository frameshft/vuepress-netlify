# vuepress-netlify-cms
Example integration of VuePress with Netlify

## How to add more directories
1) Create a new folder in docs in all lowercase
2) Modify the ```docs/public/admin/config.yml``` by inserting this to the end of the file
```
- name: "YOUR_FOLDER_NAME_IN_LOWER_CASE" # Used in routes, e.g., /admin/collections/blog
    label: "YOUR_FOLDER_NAME_CAPITALIZED" # Used in the UI
    folder: "docs/YOUR_FOLDER_NAME" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    slug: "{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
```
3) Add an additional entry to ```docs/.vuepress/config.js````
```
getSidebar('YOUR_DIRECTORY_NAME', '/YOUR_FOLDER_NAME/'),
```
into the sidebar object
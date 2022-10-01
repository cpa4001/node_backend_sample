## Endava Technical Interview

### Project Setup

- Fork the repository and clone it to your local machine. For documentation on how to do this, please visit: https://docs.github.com/en/get-started/quickstart/fork-a-repo
- Open the project locally
- Create a new branch in the newly forked repo using the naming convention **yourFirstName_yourLastName**. This is where your work should be saved.
- The application will start on http://localhost:3001
- To better understand the workflow process, view [this video](https://www.youtube.com/watch?v=1jAtPrOrRPs) on how to fork a repository, and open a pull request to merge branches within a forked repository

## Existing State

This is a simple node application for serving a blog.<br>
It uses Express Framework, Mongoose, and data is stored in a Mongo database.

Currently the application has 2 endpoints:

1. To add a blog post - Post at /blog/post
2. To get a blog post by id - Get at /blog/:id

## Task

Your task is to add a commenting feature.

You should add two new endpoints.

1. Post at /blog/post/{1}/comment - which should create a new comment for a post with passed {id}

2. Get at /blog/post/{1}/comment - which should return all comments for a post with passed {id}
   Under the resources folder are example json files for both a Blog and a Comment.

Feel free to modify existing files or create new files. You may add new dependencies if you choose. Please follow the conventions in place throughout the project.

## Resources

You may use any internet sources to aid your implementation.

Below are a few links to documentation that may be helpful:

ExpressJS - https://expressjs.com/

Mongo - https://docs.mongodb.com/guides/server/install/ : https://docs.mongodb.com/guides/

Mongoose - https://mongoosejs.com/

## Submitting Your Work (IMPORTANT)

When you are finished, create a Pull Request in Github for the forked repository. This Pull Request should compare your created branch to the **main** branch. Email the link to your Pull Request to nicole.niemczycki@endava.com at least 24 hours prior to your technical interview

Again, please make sure your Pull Request is comparing the new branch you created on your forked repo to the _main_ branch on your forked repo. The initial repository you forked off of should NOT be referenced.

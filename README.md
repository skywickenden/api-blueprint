# api-blueprint

A simple hot reloading Express API boilerplate with an example docker-compose setup.

Uses `nodemon` for automatic server restarting.

### Setup

Create a new repository from this template on the Github website by clicking on the `create from template` button in the top right.

Create a local folder for docker-compose files. `cd` into it and the clone your new repository. After cloning, rename the clone folder as `api`. Copy the contents of `example.env` and `example.docker-compose.yml` into the parent folder - into files without the `example.` prefix. If you are combining this with other templates then you will need to merge the contents rather than create new files. Open `.env` and ensure that API_HOST_PORT and API_HOST_DEBUG_PORT are available locally. If not then edit them appropriately.

### Run

From the command line in the folder containing `docker-compose.yml` :

  * Build with `docker-compose build`
  * Run with `docker-compose up`

To install new packages: Run the api docker with `docker-compose run api sh` and then use `npm install <package_name>`. Type `exit` to return to your command line and then rebuild and rerun - only this time add a -V switch... `docker-compose up -V`. This will force the deletion of the anonymous node_package volume and prevent a [docker race condition issue.](https://github.com/docker/compose/issues/4337)

### Test

Testing is performed using Jest and SuperTest. See an example in `./foo.test.js`. Run tests from the parent folder with `docker-compose run api npm run test`

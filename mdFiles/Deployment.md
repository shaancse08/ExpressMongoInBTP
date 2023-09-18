## Here we have all the Details how to deploy the express application in the BTP.

To deploy the project we need to have the `manifest.yml` file in the root folder of the project. The Yaml file has the below configurations.

| Properties | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| name       | Name of the application which will be deployed to BTP.         |
| path       | Path of the project.                                           |
| memory     | Memory of the project which will be required after deployment. |
| buildpacks | WHat are all teh build packs needed for this project.          |

Once our file preparation is done then we deploy the project using the below commands.

```sh
cf login -a "API END POINT" -u "USER_NAME" -p "PASSWORD"
```

Once logged in then navigate to the root folder (Where `manifest.yaml` exist) and hit the below command.

```sh
cf push
```

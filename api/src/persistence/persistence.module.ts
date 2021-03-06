import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ProjectSchema} from './schema/project.schema';
import {DefinitionSchema} from './schema/definition.schema';
import {InstanceSchema} from './schema/instance.schema';
import {ProjectRepository} from './repository/project.repository';
import {DefinitionRepository} from './repository/definition.repository';
import {InstanceRepository} from './repository/instance.repository';
import {environment} from '../environment/environment';
import {LogRepository} from './repository/log.repository';
import {AssetSchema} from './schema/asset.schema';
import {AssetRepository} from './repository/asset.repository';
import {DeployKeySchema} from './schema/deploy-key.schema';
import {DeployKeyRepository} from './repository/deploy-key.repository';
import {LogSchema} from './schema/log.schema';

@Module({
  imports: [
      MongooseModule.forRoot(environment.mongo.dsn),
      MongooseModule.forFeature([{
          name: 'Project',
          schema: ProjectSchema },
      ]),
      MongooseModule.forFeature([{
          name: 'Definition',
          schema: DefinitionSchema },
      ]),
      MongooseModule.forFeature([{
          name: 'Instance',
          schema: InstanceSchema },
      ]),
      MongooseModule.forFeature([{
          name: 'Asset',
          schema: AssetSchema },
      ]),
      MongooseModule.forFeature([{
          name: 'DeployKey',
          schema: DeployKeySchema },
      ]),
      MongooseModule.forFeature([{
          name: 'Log',
          schema: LogSchema },
      ]),
  ],
  controllers: [],
  providers: [
      ProjectRepository,
      DefinitionRepository,
      InstanceRepository,
      AssetRepository,
      DeployKeyRepository,
      LogRepository,
  ],
  exports: [
      ProjectRepository,
      DefinitionRepository,
      InstanceRepository,
      AssetRepository,
      DeployKeyRepository,
      LogRepository,
  ],
})
export class PersistenceModule {}

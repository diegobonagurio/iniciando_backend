import { container } from 'tsyringe';

import IStorageProvider from './StorageProviders/models/IStorageProvider';
import DiskStorageProvider from './StorageProviders/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from './MailTemplateProvider/models/IMailTemplateProvider';
import handlebarsMailTemplateProvider from './MailTemplateProvider/implementations/HandlebarsMailTemplateProvider ';

import ICacheProvider from './CacheProvider/models/ICacheProvider';
import RedisCacheProvider from './CacheProvider/implementations/RedisCacheProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  handlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);

container.registerInstance<ICacheProvider>(
  'CacheProvider',
  container.resolve(RedisCacheProvider),
);

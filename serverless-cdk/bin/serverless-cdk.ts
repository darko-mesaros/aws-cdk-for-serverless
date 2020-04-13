#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ServerlessCdkStack } from '../lib/serverless-cdk-stack';

const app = new cdk.App();
new ServerlessCdkStack(app, 'prod',
  {
    prod: true,
    env: {
      region: 'eu-west-1'
    }
  });
new ServerlessCdkStack(app, 'staging',
  {
    prod: false,
    env: {
      region: 'eu-west-1'
    }
  });

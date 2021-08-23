/**
 *  Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 *  with the License. A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
 *  and limitations under the License.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react-lite';
import { Container, Header, SpaceBetween } from '@awsui/components-react';

export interface ReviewStepProps {
  state: any;
  configuration: any;
}

export const ReviewStep = observer(function ReviewStep({ state, configuration }: ReviewStepProps) {
  return (
    <>
      <SpaceBetween size="xxl">
        <Container header={<Header variant="h2">Review</Header>}></Container>
      </SpaceBetween>
    </>
  );
});

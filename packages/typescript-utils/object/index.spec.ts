import 'mocha';

import { expect } from 'chai';

import { omit, pick } from './index';

context('@kjots/typescript-utils/object', () => {
  describe('pick()', () => {
    it('should pick the provided keys from the provided object', () => {
      // Given
      interface TestObject {
        testProperty1: string;
        testProperty2: string;
        testProperty3: string;
        testProperty4: string;
        testProperty5: string;
      }

      const testObject: TestObject = {
        testProperty1: 'Test Property 1',
        testProperty2: 'Test Property 2',
        testProperty3: 'Test Property 3',
        testProperty4: 'Test Property 4',
        testProperty5: 'Test Property 5'
      };

      // When
      type Result = Pick<TestObject, 'testProperty2' | 'testProperty3' | 'testProperty4'>;

      const result: Result = pick(testObject, 'testProperty2', 'testProperty3', 'testProperty4');

      // Then
      expect(result).to.eql({
        testProperty2: 'Test Property 2',
        testProperty3: 'Test Property 3',
        testProperty4: 'Test Property 4'
      });
    });
  });

  describe('omit()', () => {
    it('should omit the provided keys from the provided object', () => {
      // Given
      interface TestObject {
        testProperty1: string;
        testProperty2: string;
        testProperty3: string;
        testProperty4: string;
        testProperty5: string;
      }

      const testObject: TestObject = {
        testProperty1: 'Test Property 1',
        testProperty2: 'Test Property 2',
        testProperty3: 'Test Property 3',
        testProperty4: 'Test Property 4',
        testProperty5: 'Test Property 5'
      };

      // When
      type Result = Omit<TestObject, 'testProperty2' | 'testProperty3' | 'testProperty4'>;

      const result: Result = omit(testObject, 'testProperty2', 'testProperty3', 'testProperty4');

      // Then
      expect(result).to.eql({
        testProperty1: 'Test Property 1',
        testProperty5: 'Test Property 5'
      });
    });
  });
});

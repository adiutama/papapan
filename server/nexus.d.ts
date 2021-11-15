/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Board: { // root type
    id: string; // ID!
    name: string; // String!
  }
  Card: { // root type
    board_id: string; // String!
    id: string; // ID!
    list_id: string; // String!
    name: string; // String!
  }
  List: { // root type
    board_id: string; // String!
    id: string; // ID!
    name: string; // String!
  }
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Board: { // field return type
    id: string; // ID!
    lists: Array<NexusGenRootTypes['List'] | null> | null; // [List]
    name: string; // String!
  }
  Card: { // field return type
    board: NexusGenRootTypes['Board'] | null; // Board
    board_id: string; // String!
    id: string; // ID!
    list_id: string; // String!
    name: string; // String!
  }
  List: { // field return type
    board: NexusGenRootTypes['Board'] | null; // Board
    board_id: string; // String!
    cards: Array<NexusGenRootTypes['Card'] | null> | null; // [Card]
    id: string; // ID!
    name: string; // String!
  }
  Query: { // field return type
    board: NexusGenRootTypes['Board'] | null; // Board
    boards: Array<NexusGenRootTypes['Board'] | null> | null; // [Board]
    card: NexusGenRootTypes['Card'] | null; // Card
    cards: Array<NexusGenRootTypes['Card'] | null> | null; // [Card]
    list: NexusGenRootTypes['List'] | null; // List
    lists: Array<NexusGenRootTypes['List'] | null> | null; // [List]
  }
}

export interface NexusGenFieldTypeNames {
  Board: { // field return type name
    id: 'ID'
    lists: 'List'
    name: 'String'
  }
  Card: { // field return type name
    board: 'Board'
    board_id: 'String'
    id: 'ID'
    list_id: 'String'
    name: 'String'
  }
  List: { // field return type name
    board: 'Board'
    board_id: 'String'
    cards: 'Card'
    id: 'ID'
    name: 'String'
  }
  Query: { // field return type name
    board: 'Board'
    boards: 'Board'
    card: 'Card'
    cards: 'Card'
    list: 'List'
    lists: 'List'
  }
}

export interface NexusGenArgTypes {
  Query: {
    board: { // args
      id: string; // String!
    }
    boards: { // args
      ids?: string[] | null; // [String!]
    }
    card: { // args
      id: string; // String!
    }
    cards: { // args
      ids?: string[] | null; // [String!]
    }
    list: { // args
      id: string; // String!
    }
    lists: { // args
      ids?: string[] | null; // [String!]
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
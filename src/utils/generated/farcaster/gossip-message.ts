// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ContactInfoContent, ContactInfoContentT } from '../farcaster/contact-info-content';
import { ContractEvent, ContractEventT } from '../farcaster/contract-event';
import { GossipContent, unionToGossipContent, unionListToGossipContent } from '../farcaster/gossip-content';
import { GossipVersion } from '../farcaster/gossip-version';
import { Message, MessageT } from '../farcaster/message';


export class GossipMessage {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GossipMessage {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGossipMessage(bb:flatbuffers.ByteBuffer, obj?:GossipMessage):GossipMessage {
  return (obj || new GossipMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGossipMessage(bb:flatbuffers.ByteBuffer, obj?:GossipMessage):GossipMessage {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GossipMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

contentType():GossipContent {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : GossipContent.NONE;
}

content<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

topics(index: number):string
topics(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
topics(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

topicsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

version():GossipVersion {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : GossipVersion.V1;
}

static startGossipMessage(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addContentType(builder:flatbuffers.Builder, contentType:GossipContent) {
  builder.addFieldInt8(0, contentType, GossipContent.NONE);
}

static addContent(builder:flatbuffers.Builder, contentOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, contentOffset, 0);
}

static addTopics(builder:flatbuffers.Builder, topicsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, topicsOffset, 0);
}

static createTopicsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTopicsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addVersion(builder:flatbuffers.Builder, version:GossipVersion) {
  builder.addFieldInt16(3, version, GossipVersion.V1);
}

static endGossipMessage(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // content
  builder.requiredField(offset, 8) // topics
  return offset;
}

static finishGossipMessageBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedGossipMessageBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createGossipMessage(builder:flatbuffers.Builder, contentType:GossipContent, contentOffset:flatbuffers.Offset, topicsOffset:flatbuffers.Offset, version:GossipVersion):flatbuffers.Offset {
  GossipMessage.startGossipMessage(builder);
  GossipMessage.addContentType(builder, contentType);
  GossipMessage.addContent(builder, contentOffset);
  GossipMessage.addTopics(builder, topicsOffset);
  GossipMessage.addVersion(builder, version);
  return GossipMessage.endGossipMessage(builder);
}

unpack(): GossipMessageT {
  return new GossipMessageT(
    this.contentType(),
    (() => {
      let temp = unionToGossipContent(this.contentType(), this.content.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })(),
    this.bb!.createScalarList(this.topics.bind(this), this.topicsLength()),
    this.version()
  );
}


unpackTo(_o: GossipMessageT): void {
  _o.contentType = this.contentType();
  _o.content = (() => {
      let temp = unionToGossipContent(this.contentType(), this.content.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
  _o.topics = this.bb!.createScalarList(this.topics.bind(this), this.topicsLength());
  _o.version = this.version();
}
}

export class GossipMessageT {
constructor(
  public contentType: GossipContent = GossipContent.NONE,
  public content: ContactInfoContentT|ContractEventT|MessageT|null = null,
  public topics: (string)[] = [],
  public version: GossipVersion = GossipVersion.V1
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const content = builder.createObjectOffset(this.content);
  const topics = GossipMessage.createTopicsVector(builder, builder.createObjectOffsetList(this.topics));

  return GossipMessage.createGossipMessage(builder,
    this.contentType,
    content,
    topics,
    this.version
  );
}
}
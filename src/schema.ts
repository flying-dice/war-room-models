export const schema = {$id:'WarRoomModels',$schema:'http://json-schema.org/draft-07/schema#',definitions:{AirUnit:{additionalProperties:false,description:'Air Unit Model such as Fighter, Bomber or CAS Wing',properties:{country:{type:'string'},health:{type:'number'},id:{type:'string'},name:{type:'string'},size:{type:'number'},type:{type:'string'}},required:['country','health','id','name','size','type'],title:'AirUnit',type:'object'},BBox:{anyOf:[{$ref:'#/definitions/BBox2d'},{$ref:'#/definitions/BBox3d'}]},BBox2d:{description:'Bounding box\n\nhttps://tools.ietf.org/html/rfc7946#section-5 A GeoJSON object MAY have a member named "bbox" to include information on the coordinate range for its Geometries, Features, or FeatureCollections. The value of the bbox member MUST be an array of length 2*n where n is the number of dimensions represented in the contained geometries, with all axes of the most southwesterly point followed by all axes of the more northeasterly point. The axes order of a bbox follows the axes order of geometries.',items:{type:'number'},maxItems:4,minItems:4,type:'array'},BBox3d:{items:{type:'number'},maxItems:6,minItems:6,type:'array'},Coalition:{'enum':['BLUFOR','OPFOR'],type:'string'},Damageable:{additionalProperties:false,properties:{health:{type:'number'}},required:['health'],type:'object'},Entity:{additionalProperties:false,properties:{id:{type:'string'},name:{type:'string'}},required:['id','name'],type:'object'},'Feature<Point>':{additionalProperties:false,description:'Feature\n\nhttps://tools.ietf.org/html/rfc7946#section-3.2 A Feature object represents a spatially bounded thing. Every Feature object is a GeoJSON object no matter where it occurs in a GeoJSON text.',properties:{bbox:{$ref:'#/definitions/BBox',description:'Bounding box of the coordinate range of the object\'s Geometries, Features, or Feature Collections. https://tools.ietf.org/html/rfc7946#section-5'},geometry:{$ref:'#/definitions/Point'},id:{$ref:'#/definitions/Id',description:'A value that uniquely identifies this feature in a https://tools.ietf.org/html/rfc7946#section-3.2.'},properties:{$ref:'#/definitions/Properties',description:'Properties associated with this feature.'},type:{'const':'Feature',description:'Specifies the type of GeoJSON object.',type:'string'}},required:['geometry','properties','type'],type:'object'},'Feature<Polygon>':{additionalProperties:false,description:'Feature\n\nhttps://tools.ietf.org/html/rfc7946#section-3.2 A Feature object represents a spatially bounded thing. Every Feature object is a GeoJSON object no matter where it occurs in a GeoJSON text.',properties:{bbox:{$ref:'#/definitions/BBox',description:'Bounding box of the coordinate range of the object\'s Geometries, Features, or Feature Collections. https://tools.ietf.org/html/rfc7946#section-5'},geometry:{$ref:'#/definitions/Polygon'},id:{$ref:'#/definitions/Id',description:'A value that uniquely identifies this feature in a https://tools.ietf.org/html/rfc7946#section-3.2.'},properties:{$ref:'#/definitions/Properties',description:'Properties associated with this feature.'},type:{'const':'Feature',description:'Specifies the type of GeoJSON object.',type:'string'}},required:['geometry','properties','type'],type:'object'},GeoJSONObject:{additionalProperties:false,description:'GeoJSON Object\n\nhttps://tools.ietf.org/html/rfc7946#section-3 The GeoJSON specification also allows [foreign members](https://tools.ietf.org/html/rfc7946#section-6.1) Developers should use "&" type in TypeScript or extend the interface to add these foreign members.',properties:{bbox:{$ref:'#/definitions/BBox',description:'Bounding box of the coordinate range of the object\'s Geometries, Features, or Feature Collections. https://tools.ietf.org/html/rfc7946#section-5'},type:{description:'Specifies the type of GeoJSON object.',type:'string'}},required:['type'],type:'object'},GeometryObject:{additionalProperties:false,description:'Geometry Object\n\nhttps://tools.ietf.org/html/rfc7946#section-3',properties:{bbox:{$ref:'#/definitions/BBox',description:'Bounding box of the coordinate range of the object\'s Geometries, Features, or Feature Collections. https://tools.ietf.org/html/rfc7946#section-5'},type:{$ref:'#/definitions/GeometryTypes',description:'Specifies the type of GeoJSON object.'}},required:['type'],type:'object'},GeometryTypes:{description:'GeometryTypes\n\nhttps://tools.ietf.org/html/rfc7946#section-1.4 The valid values for the "type" property of GeoJSON geometry objects.','enum':['Point','LineString','Polygon','MultiPoint','MultiLineString','MultiPolygon','GeometryCollection'],type:'string'},GridLocatable:{additionalProperties:false,properties:{location:{additionalProperties:false,properties:{x:{type:'number'},y:{type:'number'}},required:['x','y'],type:'object'}},required:['location'],type:'object'},GroundUnit:{additionalProperties:false,properties:{country:{type:'string'},health:{type:'number'},id:{type:'string'},location:{additionalProperties:false,properties:{x:{type:'number'},y:{type:'number'}},required:['x','y'],type:'object'},name:{type:'string'},size:{type:'number'},type:{type:'string'}},required:['country','health','id','location','name','size','type'],type:'object'},Id:{description:'Id\n\nhttps://tools.ietf.org/html/rfc7946#section-3.2 If a Feature has a commonly used identifier, that identifier SHOULD be included as a member of the Feature object with the name "id", and the value of this member is either a JSON string or number.',type:['string','number']},Installation:{additionalProperties:false,properties:{country:{type:'string'},health:{type:'number'},id:{type:'string'},location:{$ref:'#/definitions/Feature%3CPoint%3E'},name:{type:'string'},type:{type:'string'}},required:['country','health','id','location','name','type'],type:'object'},Locatable:{additionalProperties:false,properties:{location:{$ref:'#/definitions/Feature%3CPoint%3E'}},required:['location'],type:'object'},OperationFile:{additionalProperties:false,description:'War Room Operation File',properties:{airUnits:{description:'Operation Air Units such as Fighter Wings',items:{$ref:'#/definitions/AirUnit'},title:'Air Units',type:'array'},area:{$ref:'#/definitions/Feature%3CPolygon%3E',description:'GeoJSON Polygon Feature defining the Operation Area, See\nhttps://geojson.org/geojson-spec.html for additional info'},coalitions:{additionalProperties:false,description:'Operation Coalitions',properties:{blufor:{description:'Operation Blufor Coalition',examples:['US','GE'],format:'iso-31661-alpha-2',items:{type:'string'},title:'Blufor',type:'array'},opfor:{description:'Operation Opfor Coalition',examples:['RU','IR'],format:'iso-31661-alpha-2',items:{type:'string'},title:'Opfor',type:'array'},player:{description:'Which Coalition the Player Represents','enum':['BLUFOR','OPFOR'],type:'string'}},required:['player','blufor','opfor'],title:'Coalitions',type:'object'},description:{title:'Operation Description',type:'string'},groundUnits:{description:'Operation Ground Units such as Infantry or Armor Brigades',items:{$ref:'#/definitions/GroundUnit'},title:'Ground Units',type:'array'},id:{title:'Operation ID',type:'string'},installations:{description:'Operation Installations such as Airbases or Naval Bases',items:{$ref:'#/definitions/Installation'},title:'Installations',type:'array'},name:{title:'Operation Name',type:'string'},startDate:{description:'ISO Date Time String',examples:['2022-04-12T22:28:55.980Z'],format:'iso-8601',title:'Operation Start Date',type:'string'},staticUnits:{description:'Operation Static Units such as SAM Batteries',items:{$ref:'#/definitions/StaticUnit'},title:'Static Units',type:'array'}},required:['id','name','description','startDate','coalitions','area','installations','groundUnits','staticUnits','airUnits'],title:'Operation File',type:'object'},Point:{additionalProperties:false,description:'Point Geometry Object\n\nhttps://tools.ietf.org/html/rfc7946#section-3.1.2',properties:{bbox:{$ref:'#/definitions/BBox',description:'Bounding box of the coordinate range of the object\'s Geometries, Features, or Feature Collections. https://tools.ietf.org/html/rfc7946#section-5'},coordinates:{$ref:'#/definitions/Position'},type:{'const':'Point',description:'Specifies the type of GeoJSON object.',type:'string'}},required:['coordinates','type'],type:'object'},Polygon:{additionalProperties:false,description:'Polygon Geometry Object\n\nhttps://tools.ietf.org/html/rfc7946#section-3.1.6',properties:{bbox:{$ref:'#/definitions/BBox',description:'Bounding box of the coordinate range of the object\'s Geometries, Features, or Feature Collections. https://tools.ietf.org/html/rfc7946#section-5'},coordinates:{items:{items:{$ref:'#/definitions/Position'},type:'array'},type:'array'},type:{'const':'Polygon',description:'Specifies the type of GeoJSON object.',type:'string'}},required:['coordinates','type'],type:'object'},Position:{description:'Position\n\nhttps://tools.ietf.org/html/rfc7946#section-3.1.1 Array should contain between two and three elements. The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values), but the current specification only allows X, Y, and (optionally) Z to be defined.',items:{type:'number'},type:'array'},Properties:{anyOf:[{type:'object'},{type:'null'}],description:'Properties\n\nhttps://tools.ietf.org/html/rfc7946#section-3.2 A Feature object has a member with the name "properties". The value of the properties member is an object (any JSON object or a JSON null value).'},StaticUnit:{additionalProperties:false,properties:{country:{type:'string'},health:{type:'number'},id:{type:'string'},location:{$ref:'#/definitions/Feature%3CPoint%3E'},name:{type:'string'},size:{type:'number'},type:{type:'string'}},required:['country','health','id','location','name','size','type'],type:'object'},Unit:{additionalProperties:false,properties:{country:{type:'string'},health:{type:'number'},id:{type:'string'},name:{type:'string'},size:{type:'number'},type:{type:'string'}},required:['country','health','id','name','size','type'],type:'object'}}}
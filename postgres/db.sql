 CREATE TABLE Usuario (
  nombre varchar(30),
  clave varchar(10)
 );


 CREATE TABLE Producto (
  IdProducto varchar(30),
  Descripcion varchar(10),
  GrabadoId integer,
  DiseñoId  integer,
  ColorId integer,
  MarcaId integer,
  MetrajeId integer,
  UsoId integer,
  Stock decimal(10,1)
  Espesor decimal(10,2)
  Precio  decimal(10,2)
 );

 CREATE TABLE Grabado (
   IdGrabado  integer,
   Descripcion varchar(50)
 );

 CREATE TABLE Diseño (
   IdDiseño integer,
   Descripcion varchar(50)
 );

 CREATE TABLE Uso (
   IdUso  integer,
   Descripcion varchar(50),
 );

 CREATE TABLE Metraje (
  IdMetraje integer,
  Descripcion varchar(50)
 );

 CREATE TABLE Marca (
   IdMarca  integer,
   Descripcion varchar(50)
 );

 CREATE TABLE Color (
   IdColor  integer,
   Descripcion varchar(50)
 );

 CREATE TABLE Transformacion ( 
  IdTransformacion  integer,
  Descripcion varchar(50)
);


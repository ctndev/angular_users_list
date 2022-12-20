CREATE DATABASE ctnusers;

begin transaction;
 
CREATE SEQUENCE public.users_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

create table public.users(
    id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying(255) NOT NULL
);


insert into public.users(name) values('Yuri Caetano'), ('Jorge Souza');

commit;


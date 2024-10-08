PGDMP                      |            take_home_test    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    18357    take_home_test    DATABASE     �   CREATE DATABASE take_home_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE take_home_test;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    18408    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false    4            �            1259    18420    posts    TABLE     _  CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(200) NOT NULL,
    content text NOT NULL,
    category character varying(100) NOT NULL,
    created_date timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_date timestamp(3) with time zone NOT NULL,
    status character varying(100) NOT NULL
);
    DROP TABLE public.posts;
       public         heap    postgres    false    4            �            1259    18419    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public          postgres    false    4    217            �           0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public          postgres    false    216            V           2604    18423    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �          0    18408    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    215   �       �          0    18420    posts 
   TABLE DATA           a   COPY public.posts (id, title, content, category, created_date, updated_date, status) FROM stdin;
    public          postgres    false    217   <       �           0    0    posts_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.posts_id_seq', 10, true);
          public          postgres    false    216            Y           2606    18416 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    215            \           2606    18428    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public            postgres    false    217            Z           1259    18429    posts_id_idx    INDEX     <   CREATE INDEX posts_id_idx ON public.posts USING btree (id);
     DROP INDEX public.posts_id_idx;
       public            postgres    false    217            �   �   x�m�1�@k��Ckc��#���>�&U���ԑ��-�Ԅj�C��X5���!�5����"��T{��@&p�$bǁ����mִ>Ks��`���t#]	+0�a�c�Q� <����ǵ�?��lc)�l�-      �   �  x��W�r�8<�_���*[�&Nnv���u�+몽�e(@d���� )ZN�_$�ģg��{��nUK[j���@�X�����R$'n��d�ğ�pGۨ<���Kڲ�$Y�

�2��3���Z��Fat$Ԛ<�76��%������獚j҆��,��|�FY��^�3Z�ր��!7�#�H@�2��ָ���� "���wԐ��+�M�0���&�f|����,<
�U���>)�q[�NV��'ǫSq�����۳�����/'������Ggյ
���0Ž�'�\LF|��Hܩ��2�TW�h���R�!�5W��p�er��R�@�tv`���#�&�I�S��P�������wQ�Z!�����Hķ:>�s�{��H���5��t��(��n��̷`�)��>/[��s���Ӄ�?��>�V���9��5�v�@��A�K'��~����k	|w��U�(�N!�7l��(�]�k7rr�� �6��N'�|b�'~��ܯ3ʆ�)*�Zf�1G	<�a��1t��(�f�G�f
��h�{�(z�_Z(ӹ���N�,��e��qk����[O�������&��N9�e��] b��j��r��@\�t�e��8��Ҵ)-,�ܬ�ea@���vC[;��H��٬�'�O-?/�uR�9�W2��ް,!�-�(z�y��c1k�;�����v�*W�qչ��R��7��-���{��q�y�
��f)�I���ʳ�:q�����I�����gL�s��S>37�Y�Y/����rL|��&�
2�z1�6TfX4ONڱ���*c�ÑZ&J}���}���3��D�A ,j�2��io��#3�l��af���6�P��l��WH\L�)�)S��t)�(I���;?7���@�4�>QE�E�,��9\�#�r�"h ��4TJ�AD��Gj_h�#�/X�G�A<�^r��<�Hd	�q�Y]?�I;��	-��.�f`��'��*���c���[�<�|�`�n��b.�%�f�j���1/-62�GTF�wsv��~�
��"���R�zg!����ђn��	�[q�/��}pr���rG -�����]�w�m5s�$�-*��h�sv圾�3ΔX��M&+����b9��R�bb�ץ�%���M{�s��b��
Z�˗'���'>�;���h�ϣm�9}�V���XݒvP��:���'��w{��q��fS�䩈MK|�(PDKa��3��I�E>��,]�-V?�����
�Wp&U*3�X��`E="���Cf^�t���hcu�+)ָ5��kCI5��(+�~b(:��r_���*Ϙ������zTuU�����O�'����2�.�V���Mf�e�;w6�ͺ.?���AZjۭ�zKlãN�/��A�<0�+?H��F�&N?,��kɿI,'���������������Ŭ.����%1     
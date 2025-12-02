SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict 8PTAwXA4hYIE33mJP6py4uvdaav3rGKGFpXQUVo5wZCjpRHnTlBgFSkbkbitfi3

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'db331642-6f75-4ef8-9dbb-a6352318ce7f', 'authenticated', 'authenticated', 'jhkonka@live.cn', NULL, '2025-11-24 03:18:44.00262+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-11-25 09:11:25.32797+00', '{"provider": "github", "providers": ["github"]}', '{"iss": "https://api.github.com", "sub": "19185055", "name": "Martin Tian", "email": "jhkonka@live.cn", "full_name": "Martin Tian", "user_name": "MicyToy", "avatar_url": "https://avatars.githubusercontent.com/u/19185055?v=4", "provider_id": "19185055", "email_verified": true, "phone_verified": false, "preferred_username": "MicyToy"}', NULL, '2025-11-24 03:18:43.923365+00', '2025-11-25 09:11:25.329839+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postes
--



--
-- Data for Name: todos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."todos" ("id", "user_id", "title", "description", "status", "priority", "due_date", "created_at", "updated_at") OVERRIDING SYSTEM VALUE VALUES
	(1, 'db331642-6f75-4ef8-9dbb-a6352318ce7f', '任务 demo 1', 'hahahahha2222', 'pending', 1, NULL, '2025-11-24 07:47:26.915411', '2025-11-24 07:47:26.915411'),
	(2, 'db331642-6f75-4ef8-9dbb-a6352318ce7f', '任务DEMO 2', 'HEIHEIHEIHEIHE', 'pending', 2, '2025-11-26 15:53:00', '2025-11-24 07:50:01.677393', '2025-11-24 07:50:01.677393');


--
-- Data for Name: todo_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 15, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."categories_id_seq"', 1, false);


--
-- Name: todos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."todos_id_seq"', 2, true);


--
-- PostgreSQL database dump complete
--

-- \unrestrict 8PTAwXA4hYIE33mJP6py4uvdaav3rGKGFpXQUVo5wZCjpRHnTlBgFSkbkbitfi3

RESET ALL;

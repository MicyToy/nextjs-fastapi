drop policy "Users can insert todo-category" on "public"."todo_categories";

drop policy "Users can view own todo-category relations" on "public"."todo_categories";

alter table "public"."todo_categories" drop constraint "todo_categories_category_id_fkey";

alter table "public"."todo_categories" drop constraint "todo_categories_todo_id_fkey";

alter table "public"."todo_categories" add constraint "todo_categories_category_id_fkey" FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE not valid;

alter table "public"."todo_categories" validate constraint "todo_categories_category_id_fkey";

alter table "public"."todo_categories" add constraint "todo_categories_todo_id_fkey" FOREIGN KEY (todo_id) REFERENCES public.todos(id) ON DELETE CASCADE not valid;

alter table "public"."todo_categories" validate constraint "todo_categories_todo_id_fkey";


  create policy "Users can insert todo-category"
  on "public"."todo_categories"
  as permissive
  for insert
  to public
with check ((EXISTS ( SELECT 1
   FROM public.todos t
  WHERE ((t.id = todo_categories.todo_id) AND (t.user_id = ( SELECT auth.uid() AS uid))))));



  create policy "Users can view own todo-category relations"
  on "public"."todo_categories"
  as permissive
  for select
  to public
using ((EXISTS ( SELECT 1
   FROM public.todos t
  WHERE ((t.id = todo_categories.todo_id) AND (t.user_id = ( SELECT auth.uid() AS uid))))));


-- CREATE TRIGGER tr_check_filters BEFORE INSERT OR UPDATE ON realtime.subscription FOR EACH ROW EXECUTE FUNCTION realtime.subscription_check_filters();



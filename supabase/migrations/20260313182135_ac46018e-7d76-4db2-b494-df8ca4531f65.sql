
-- The contact_messages INSERT WITH CHECK (true) is intentional for public contact forms.
-- Add rate limiting note: in production, consider edge function validation.
-- No schema change needed, the warning is acceptable for this use case.
-- But let's restrict it to only INSERT to be explicit:
DROP POLICY "Anyone can submit contact" ON public.contact_messages;
CREATE POLICY "Anyone can submit contact" ON public.contact_messages FOR INSERT TO authenticated WITH CHECK (true);

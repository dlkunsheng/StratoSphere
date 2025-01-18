# ICSIT (Industrial and Commercial Storage Investment Tool)

## Frontend

ICSIT's app infrastructure is:
* **Frontend**
    * Next.js v14
    * Chakra UI v2
    * Horizon UI
    * Chakara Templates
    * and micro-frontend architecture with qiankun for more complex and enterprise web application frontend development.
    * keep evergreen and TBC with Next.js v15 and Chakara UI in near future
* **Backend**
    * Spring Boot
    * and microservices architecture even with .NET later on
* **Database**
    * PostgreSQL as database storage and Supabase as logical data access layer
    * Frontend logic can access to Supabase and backend is able to consume PostgreSQL queries.

## Frontend Installation

As normal node app to use:
* `npm install` for all installation of all dependencies.
* and then `npm run dev` to bootstrap local frontend with localhost and 3000 port

To successfully setup Supabase, you need to:
* copy `config.toml.example` under `frontend\supabase` to `config.toml`
* then run `npx supabase start` and make sure you already have docker (Linux) or docker desktop (Windows) on your local

Then create a new file named `.env.local` under `frontend` root with following content:
```
NEXT_PUBLIC_SUPABASE_URL=<Supabase API, e.g. http://127.0.0.1:54321>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<Anon Key>
```
The above 2 configuration values can be found in output of local Supabase setup.

## Frontend Folder Structure

Whole frontend content is based on Horizon UI and we created chakara-templates folder to put examples of Chakra Templates. (Still in progress and to be continued)





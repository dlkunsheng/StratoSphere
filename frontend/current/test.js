import { createClient } from '@supabase/supabase-js';

// 替换为实际环境变量
const supabaseUrl = 'https://xveofncxujseprnyjmuz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZW9mbmN4dWpzZXBybnlqbXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzOTc1NzUsImV4cCI6MjA1MTk3MzU3NX0.HiqxZFmdg8uEzRLp8AwZvhe3fL85yAccD1CXM5CNGZY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

supabase.from('your_table_name').select('*').then(({ data, error }) => {
    if (error) {
        console.error('连接 Supabase 出现问题:', error);
    } else {
        console.log('成功连接到 Supabase，获取的数据:', data);
    }
});
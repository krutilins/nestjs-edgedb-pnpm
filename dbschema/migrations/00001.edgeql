CREATE MIGRATION m1ahehqcrgmpvlls6pwyd3l5ke3qrjihgb3jyf7gmepptxdxtjfdua
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::User {
      CREATE PROPERTY age -> std::int64;
      CREATE REQUIRED PROPERTY email -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::max_len_value(100);
          CREATE CONSTRAINT std::min_len_value(5);
          CREATE CONSTRAINT std::regexp('^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');
      };
      CREATE PROPERTY name -> std::str;
  };
};

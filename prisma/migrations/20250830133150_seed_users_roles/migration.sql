INSERT INTO roles (name, description, created_at, updated_at) VALUES
    ('Admin',   'Full administrative access',         NOW(), NOW()),
    ('Editor',  'Create/update content',              NOW(), NOW()),
    ('Viewer',  'Read-only access',                   NOW(), NOW()),
    ('Manager', 'Manage teams and projects',          NOW(), NOW()),
    ('Auditor', 'Independent audit (no write perms)', NOW(), NOW());

INSERT INTO users (name, email, created_at, updated_at) VALUES
    ('Alex Johnson',   'alex.johnson@example.com',   NOW(), NOW()),
    ('Barbara King',   'barbara.king@example.com',   NOW(), NOW()),
    ('Carlos Diaz',    'carlos.diaz@example.com',    NOW(), NOW()),
    ('Diana Wu',       'diana.wu@example.com',       NOW(), NOW()),
    ('Ethan Brown',    'ethan.brown@example.com',    NOW(), NOW()),
    ('Fatima Ali',     'fatima.ali@example.com',     NOW(), NOW()),
    ('Grace Lee',      'grace.lee@example.com',      NOW(), NOW()),
    ('Hector Lopez',   'hector.lopez@example.com',   NOW(), NOW()),
    ('Ivy Nguyen',     'ivy.nguyen@example.com',     NOW(), NOW()),
    ('Jack O''Connor', 'jack.oconnor@example.com',   NOW(), NOW()),
    ('Karen Patel',    'karen.patel@example.com',    NOW(), NOW()),
    ('Liam Schmidt',   'liam.schmidt@example.com',   NOW(), NOW()),
    ('Mia Rossi',      'mia.rossi@example.com',      NOW(), NOW()),
    ('Noah Kim',       'noah.kim@example.com',       NOW(), NOW()),
    ('Olivia White',   'olivia.white@example.com',   NOW(), NOW());

INSERT INTO users_roles (user_id, role_id) VALUES
    ((SELECT id FROM users WHERE email='alex.johnson@example.com'),   (SELECT id FROM roles WHERE name='Admin')),
    ((SELECT id FROM users WHERE email='ethan.brown@example.com'),    (SELECT id FROM roles WHERE name='Admin')),
    ((SELECT id FROM users WHERE email='ivy.nguyen@example.com'),     (SELECT id FROM roles WHERE name='Admin')),
    ((SELECT id FROM users WHERE email='liam.schmidt@example.com'),   (SELECT id FROM roles WHERE name='Admin')),

    ((SELECT id FROM users WHERE email='alex.johnson@example.com'),   (SELECT id FROM roles WHERE name='Editor')),
    ((SELECT id FROM users WHERE email='barbara.king@example.com'),   (SELECT id FROM roles WHERE name='Editor')),
    ((SELECT id FROM users WHERE email='diana.wu@example.com'),       (SELECT id FROM roles WHERE name='Editor')),
    ((SELECT id FROM users WHERE email='hector.lopez@example.com'),   (SELECT id FROM roles WHERE name='Editor')),
    ((SELECT id FROM users WHERE email='karen.patel@example.com'),    (SELECT id FROM roles WHERE name='Editor')),

    ((SELECT id FROM users WHERE email='barbara.king@example.com'),   (SELECT id FROM roles WHERE name='Viewer')),
    ((SELECT id FROM users WHERE email='carlos.diaz@example.com'),    (SELECT id FROM roles WHERE name='Viewer')),
    ((SELECT id FROM users WHERE email='grace.lee@example.com'),      (SELECT id FROM roles WHERE name='Viewer')),
    ((SELECT id FROM users WHERE email='jack.oconnor@example.com'),   (SELECT id FROM roles WHERE name='Viewer')),
    ((SELECT id FROM users WHERE email='mia.rossi@example.com'),      (SELECT id FROM roles WHERE name='Viewer')),
    ((SELECT id FROM users WHERE email='olivia.white@example.com'),   (SELECT id FROM roles WHERE name='Viewer')),

    ((SELECT id FROM users WHERE email='diana.wu@example.com'),       (SELECT id FROM roles WHERE name='Manager')),
    ((SELECT id FROM users WHERE email='grace.lee@example.com'),      (SELECT id FROM roles WHERE name='Manager')),
    ((SELECT id FROM users WHERE email='ivy.nguyen@example.com'),     (SELECT id FROM roles WHERE name='Manager')),
    ((SELECT id FROM users WHERE email='noah.kim@example.com'),       (SELECT id FROM roles WHERE name='Manager')),

    ((SELECT id FROM users WHERE email='fatima.ali@example.com'),     (SELECT id FROM roles WHERE name='Auditor'));

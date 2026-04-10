CREATE TABLE attendance (
  attendance_id INT NOT NULL AUTO_INCREMENT,
  crew_id INT NOT NULL,
  nickname VARCHAR(50) NOT NULL,
  attendance_date DATE NOT NULL,
  start_time TIME,
  end_time TIME,
  PRIMARY KEY (attendance_id)
);


INSERT INTO attendance (crew_id, nickname, attendance_date, start_time, end_time) VALUES

  -- 검프(crew_id=1)
  (1, '검프', '2025-03-04', '09:45', '18:10'),
  (1, '검프', '2025-03-05', '09:50', '18:05'),
  (1, '검프', '2025-03-06', '09:59', '18:02'),
  (1, '검프', '2025-03-07', '10:00', '18:05'),
  (1, '검프', '2025-03-10', '12:55', '18:10'),
  (1, '검프', '2025-03-11', '09:58', '18:03'),
  (1, '검프', '2025-03-12', '09:55', '18:05'),

  -- 구구(crew_id=2)
  (2, '구구', '2025-03-04', '10:01', '18:01'),
  (2, '구구', '2025-03-05', '09:59', '18:00'),
  (2, '구구', '2025-03-06', '09:58', '17:30'),
  (2, '구구', '2025-03-07', '10:10', '18:00'),
  (2, '구구', '2025-03-11', '09:59', '18:01'),
  (2, '구구', '2025-03-12', '10:02', '18:10'),

  -- 네오(crew_id=3)
  (3, '네오', '2025-03-04', '09:59', '18:00'),
  (3, '네오', '2025-03-05', '10:03', '18:15'),
  (3, '네오', '2025-03-07', '10:00', '17:50'),
  (3, '네오', '2025-03-10', '13:05', '18:10'),
  (3, '네오', '2025-03-12', '09:55', '18:00'),

  -- 브라운(crew_id=4)
  (4, '브라운', '2025-03-04', '09:59', '18:00'),
  (4, '브라운', '2025-03-05', '09:59', '18:00'),
  (4, '브라운', '2025-03-06', '10:00', '18:00'),
  (4, '브라운', '2025-03-07', '10:00', '18:00'),
  (4, '브라운', '2025-03-10', '13:00', '18:00'),
  (4, '브라운', '2025-03-11', '09:59', '18:00'),
  (4, '브라운', '2025-03-12', '09:59', '18:00'),

  -- 브리(crew_id=5)
  (5, '브리', '2025-03-04', '10:20', '18:10'),
  (5, '브리', '2025-03-05', '09:58', '18:02'),
  (5, '브리', '2025-03-06', '09:59', '18:00'),
  (5, '브리', '2025-03-07', '10:02', '18:00'),
  (5, '브리', '2025-03-11', '09:55', '18:00'),
  (5, '브리', '2025-03-12', '09:57', '18:05'),

  -- 포비(crew_id=6)
  (6, '포비', '2025-03-04', '10:15', '17:58'),
  (6, '포비', '2025-03-05', '10:05', '18:05'),
  (6, '포비', '2025-03-10', '13:10', '18:10'),
  (6, '포비', '2025-03-11', '09:52', '18:01'),
  (6, '포비', '2025-03-12', '09:59', '18:00'),

  -- 워니(crew_id=7)
  (7, '워니', '2025-03-04', '10:10', '18:10'),
  (7, '워니', '2025-03-05', '09:50', '18:02'),
  (7, '워니', '2025-03-10', '12:59', '18:05'),
  (7, '워니', '2025-03-12', '10:05', '17:00'),

  -- 리사(crew_id=8)
  (8, '리사', '2025-03-04', '09:55', '18:00'),
  (8, '리사', '2025-03-05', '10:01', '18:03'),
  (8, '리사', '2025-03-06', '10:10', '17:40'),
  (8, '리사', '2025-03-07', '10:02', '18:05'),
  (8, '리사', '2025-03-10', '13:02', '18:00'),
  (8, '리사', '2025-03-11', '10:05', '18:10'),
  (8, '리사', '2025-03-12', '10:03', '18:00'),

  -- 제임스(crew_id=9)
  (9, '제임스', '2025-03-04', '09:55', '18:00'),
  (9, '제임스', '2025-03-05', '09:59', '18:00'),
  (9, '제임스', '2025-03-06', '09:59', '18:10'),
  (9, '제임스', '2025-03-07', '10:05', '18:00'),
  (9, '제임스', '2025-03-10', '12:59', '17:50'),
  (9, '제임스', '2025-03-11', '09:55', '18:00'),
  (9, '제임스', '2025-03-12', '10:01', '18:00'),

  -- 류시(crew_id=10)
  (10, '류시', '2025-03-04', '10:04', '18:00'),
  (10, '류시', '2025-03-05', '10:02', '18:02'),
  (10, '류시', '2025-03-06', '09:45', '18:05'),
  (10, '류시', '2025-03-07', '10:10', '18:00'),
  (10, '류시', '2025-03-10', '13:03', '17:40'),
  (10, '류시', '2025-03-11', '09:57', '18:10'),
  (10, '류시', '2025-03-12', '09:59', '17:30'),

  -- 디노(crew_id=11)
  (11, '디노', '2025-03-04', '09:59', '18:00'),
  (11, '디노', '2025-03-05', '10:10', '18:00'),
  (11, '디노', '2025-03-06', '09:57', '18:05'),
  (11, '디노', '2025-03-07', '10:00', '18:03'),
  (11, '디노', '2025-03-10', '12:57', '18:00'),
  (11, '디노', '2025-03-11', '09:55', '18:00'),
  (11, '디노', '2025-03-12', '10:03', '18:05'),

  -- 시지프(crew_id=12)
  (12, '시지프', '2025-03-04', '09:52', '18:05'),
  (12, '시지프', '2025-03-05', '09:55', '18:00'),
  (12, '시지프', '2025-03-06', '10:15', '18:00'),
  (12, '시지프', '2025-03-07', '10:03', '17:59'),
  (12, '시지프', '2025-03-10', '12:58', '18:10'),
  (12, '시지프', '2025-03-11', '09:55', '18:00'),
  (12, '시지프', '2025-03-12', '10:10', '18:10');

-- 1-3
SELECT DISTINCT nickname FROM attendance;

-- 1-4
CREATE TABLE crew (
    crew_id INT NOT NULL AUTO_INCREMENT,
    nickname VARCHAR(50) NOT NULL,
    PRIMARY KEY (crew_id)
);

-- 1-5.
INSERT INTO crew (`nickname`)
SELECT DISTINCT a.nickname FROM attendance a;

-- 2-2.
ALTER TABLE attendance 
    DROP COLUMN nickname;

-- 3-1.
ALTER TABLE attendance
ADD CONSTRAINT fk_attendance_crew
FOREIGN KEY (crew_id) REFERENCES crew(crew_id) ON DELETE CASCADE;

-- 4-1.
ALTER TABLE crew ADD UNIQUE (nickname);

-- 5-1.
select * from crew c where c.nickname like '디%';

-- 6-1.
select * from crew c join attendance a on c.crew_id = a.crew_id where a.attendance_date = '2025-03-06' and c.nickname = '어셔'; 

-- 7-1.
INSERT INTO crew (nickname) value('어셔');
INSERT INTO attendance (crew_id, attendance_date, start_time, end_time)
select c.crew_id, '2025-03-06', '09:31', '18:01'
     from crew c 
    where c.nickname = '어셔';

select * from attendance a where a.attendance_date = '2025-03-06'; 




-- 8-1.
INSERT INTO crew (nickname) VALUES ('주니');
INSERT INTO attendance (crew_id, attendance_date, start_time, end_time)
SELECT crew_id, '2025-03-12', '10:05', '18:00'
FROM crew 
WHERE nickname = '주니';
UPDATE attendance a SET a.start_time = '10:00' where a.crew_id = (select c.crew_id from crew c where c.nickname = '주니');

-- 9-1.
INSERT INTO crew (nickname) VALUES ('아론');
INSERT INTO attendance (crew_id, attendance_date, start_time, end_time)
SELECT crew_id, '2025-03-12', '10:00', '18:00'
FROM crew 
WHERE nickname = '아론';
DELETE FROM attendance a where a.attendance_date = '2025-03-12' and a.crew_id = (select c.crew_id from crew c where c.nickname = '아론');

select * from attendance a where a.attendance_date = '2025-03-12';

-- 10-1.
SELECT 
    c.nickname, 
    a.attendance_date, 
    a.start_time, 
    a.end_time
FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id;

-- 11-1.
SELECT * FROM attendance 
WHERE crew_id = (SELECT crew_id FROM crew WHERE nickname = '검프');

-- 12-1.
SELECT c.nickname, a.end_time FROM crew c join attendance a on a.crew_id = c.crew_id where a.attendance_date = '2025-03-05' LIMIT 1;

-- 13-1.
SELECT c.nickname, COUNT(a.attendance_date) AS recorded_days from crew c join attendance a on a.crew_id = c.crew_id group by a.crew_id, c.nickname;

-- 14-1.
SELECT c.nickname, COUNT(a.attendance_date) AS recorded_days from crew c join attendance a on a.crew_id = c.crew_id where a.start_time is not NULL group by a.crew_id, c.nickname;

-- 15-1.
SELECT a.attendance_date, COUNT(c.crew_id) AS recorded_days from crew c join attendance a on a.crew_id = c.crew_id group by a.attendance_date;

-- 16-1.
SELECT c.nickname, MIN(a.start_time) AS earliest_time, MAX(a.start_time) AS latest_time from crew c join attendance a on a.crew_id = c.crew_id group by c.crew_id, c.nickname;

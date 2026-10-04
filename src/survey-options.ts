export const sqlOptions = [
  ["select","SELECT：データを取得する"], ["where","WHERE：条件で絞り込む"], ["order","ORDER BY：並べ替える"], ["group","集計・GROUP BY：件数や合計を求める"], ["join","JOIN：複数のテーブルを結合する"], ["subquery","サブクエリ：クエリの中でクエリを使う"], ["write","INSERT / UPDATE / DELETE：追加・更新・削除"], ["create","CREATE TABLE：テーブルを作る"], ["other","その他"], ["none","まだ知らない・使ったことがない"]
] as const;
export const productOptions = ["MySQL","PostgreSQL","Oracle Database","SQL Server","SQLite","Microsoft Access","MariaDB","BigQuery","Snowflake","MongoDB","その他"];
export const languageOptions = ["Python","Java","JavaScript","TypeScript","C","C++","C#","PHP","Ruby","Go","SQL","VBA","その他"];

export const majorOptions = ["文系", "理系", "情報系"];
export const qualificationOptions = ["ITパスポート", "基本情報技術者試験", "応用情報技術者試験", "情報セキュリティマネジメント試験", "情報処理安全確保支援士試験（合格）", "その他", "取得なし"];

import { isNotEmpty } from "src/shared/utils/common/common.util";
import { ListPostDto } from "../../models";

/** 포스트 목록을 조회한다. */
export const listPostSql = (params: { listPostDto: ListPostDto }): string => {
  return `
    SELECT *
    FROM (
      (
        SELECT 
            DISTINCT(post.id) AS id
          , COUNT(postLike.id) OVER (PARTITION BY postLike.id) AS likeCnt
          , post.title
          , post.reg_date AS regDate
          , post.reply_cnt AS replyCnt
          , SUBSTR(post.raw_text, 1, 180) AS rawText
          , post.og_img_url AS ogImgUrl
          , post.secret_yn AS secretYn
          , post.pin_yn AS pinYn
          , postCategory.category_id AS categoryId
        FROM post
          LEFT JOIN post_category AS postCategory ON postCategory.post_id = post.id
          LEFT JOIN post_like AS postLike ON postLike.post_id = post.id
        WHERE 1=1
          AND   post.pin_yn = 'Y'
          ${'N' === params.listPostDto?.isLogin ?
          "AND post.secret_yn = 'N'" : ""
          }
          ${isNotEmpty(params.listPostDto?.categoryId) && 0 < params.listPostDto?.categoryId ?
          "AND postCategory.category_id = ?" : ""
          }
      )
      UNION
      (
        SELECT 
            DISTINCT(post.id) AS id
          , COUNT(postLike.id) OVER (PARTITION BY postLike.id) AS likeCnt
          , post.title
          , post.reg_date AS regDate
          , post.reply_cnt AS replyCnt
          , SUBSTR(post.raw_text, 1, 180) AS rawText
          , post.og_img_url AS ogImgUrl
          , post.secret_yn AS secretYn
          , post.pin_yn AS pinYn
          , postCategory.category_id AS categoryId
        FROM post
          LEFT JOIN post_category AS postCategory ON postCategory.post_id = post.id
          LEFT JOIN post_like AS postLike ON postLike.post_id = post.id
        WHERE 1=1
          AND   post.pin_yn = 'N'
          ${'N' === params.listPostDto?.isLogin ?
          "AND post.secret_yn = 'N'" : ""
          }
          ${isNotEmpty(params.listPostDto?.categoryId) && 0 < params.listPostDto?.categoryId ?
          "AND postCategory.category_id = ?" : ""
          }
        GROUP BY post.id, postCategory.category_id
        ORDER BY post.pin_yn DESC, post.reg_date DESC
      )
    ) t
    GROUP BY id, categoryId
    ORDER BY pinYn DESC, regDate DESC
  `;
};

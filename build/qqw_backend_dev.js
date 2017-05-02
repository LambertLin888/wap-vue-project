/**
 * 后台接口文件
 */

const
			BackendApiHomepage = '/mock/main/main',           // 二期首页
			BackendApiMinarticle = '/mock/main/rec',				// 首页文章
			BackendApiSpecial = '/mock/butler-article/special',			// 专题精选
			BackendApiSpecialTwo = '/mock/butler-article/specialTwo',			// 专题精选二期
			BackendApiSpecialCategory = '/mock/butler-article/category',			// 专题精选分类
			BackendApiDiscovery = '/find-main',									// 发现 - 发现（达人推荐）
			BackendApiCategory = '/category-main/index',							// 商品分类
			BackendApiSubcategory = '/goods-main/list',			// 商品列表（商品分类二级，cat_id: 分类ID）
			BackendApiBrand = '/goods-brand/list',							// 品牌制造商列表
			BackendApiLike = '/mock/butler-article/like',						// 点赞接口
			BackendApiUnLike = '/butler-article/unlike',					// 取消点赞接口
			BackendApiCollectAdd = '/goods-favorite?a=add',			// 收藏
			BackendApiCollectDel = '/goods-favorite?a=del',			// 收藏
			BackendApiDasan = '/butler-article/reward',				// 文章打赏
			BackendApiDoyenList = '/mockwap/butler-doyen/list',			// 达人列表，doyen_type: 1-采购，2-编辑 3-达人
			BackendApiNavItem =  '/mock/goods-main/newlist',			// 导航菜单商品列表
			BackendApiArticleLikeNum = '/butler-article/likenum',		          // 点赞数量
			BackendApiUserb = '/mock/butler-doyen/detail',		// 体验官信息
			BackendApiArticleList = '/mock/butler-article/list',		// 文章列表
			BackendApiBindButler = '/mock/butler-main/bindButler',		// 选择管家
			BackendApiChooseList='/mock/butler-main/butlerChooseList',       //选择管家列表
			BackendApiTagList='/mock/tag-main/showTag',      //标签列表
                               BackendApiTagChangeList='/mock/tag-main/changeTag',    //标签列表
                               BackendApiFocus='/mock/user-follow/addFollow',     //关注管家
                               BackendApiCancelFocus='/mock/user-follow/cancelFollow' ,    //取消关注管家
                               BackendApiBinds='/mock/butler-main/bind',                       //绑定管家接口
                               BackendApisaveBind='/mock/butler-main/saveBind',            //保存管家绑定信息
                               BackendApisendSms='/mock/integral-main/sendSms' ,
                               BackendApiGetTopicList='/mock/topic-main/list',         //获取话题列表
                               BackendApiGetTopicHead='/mock/topic-main/index',         //获取话题头部信息
                               BackendApiGetTopicDetail='/mock/topic-main/detail',    //获取话题详情
                               BackendApiGetTopicCommentList='/mock/topic-main/commentList',    //获取话题-评论列表
                               BackendApiGetColumnDetails='/mock/butler-article/detail',     //获取专栏详情
                               BackendApiGetColumnComment='/mock/butler-article/commonList',     //获取专栏评论列表
                               BackendApiGetZhuanlanList='/mock/butler-article/getCateArticleList',     //获取专栏列表
                               BackendApiTopicmainikeLike='/mock/topic-main/like',                //话题-评论点赞
                               BackendApiTopicmainundLike='/mock/topic-main/unlike',                //话题-评论取消点赞
                               BackendApiunlikeComment='/mock/butler-article/unlikeArticleComment',     //文章（专栏）取消点赞
                               BackendApilikeComment='/mock/butler-article/likeArticleComment',          //文章（专栏)点赞
                               BackendApilikeArticle='/mock/butler-article/like',          //文章详情点赞
                               BackendApunlikeArticle='/mock/butler-article/unlike',      //文章详情取消点赞
                               BackendAtopcomment='/mock/topic-main/comment',      //话题
                               BackendApipublishComment='/mock/butler-article/publishComment', //文章发布评论
                               BackendApiSixinList='/mock/user-pm/index', //消息中心-私信列表
                               BackendApiCommontList='/mock/butler-article/commentList', //消息中心-评价列表
                               BackendApiXitongList='/mock/user-message/index', //消息中心-系统列表
                               BackendApiprivateLetter='/mock/user-pm/detail' , //用户私信详情
                               BackendApisendLetter='/mock/user-pm/send',    //保存(发送)私信
                               BackendApimessageDetails='/mock/user-message/detail', //系统消息详细信息
                               BackendApiwomenIndex='/mock/marketing-special/getSpecialListByCate',   //38专题首页
                               BackendApiwomanCook='/mock/marketing-special/getSpecialGoodsBySpec',   //38-特卖活动信息
                               BackendApiClassCon='/mock/category-main/oneCateGoodsList', //38-二级三级分类
                               BackendApiCateGoodsList='/mock/category-main/cateGoodsList' //38-一级别分类

export {
	BackendApiHomepage,
	BackendApiMinarticle,
	BackendApiSpecial,
	BackendApiSpecialTwo,
	BackendApiSpecialCategory,
	BackendApiDiscovery,
	BackendApiCategory,
	BackendApiSubcategory,
	BackendApiBrand,
	BackendApiLike,
	BackendApiUnLike,
	BackendApiCollectAdd,
	BackendApiCollectDel,
	BackendApiDasan,
	BackendApiDoyenList,
	BackendApiNavItem,
	BackendApiArticleLikeNum,
	BackendApiUserb,
	BackendApiArticleList,
	BackendApiBindButler,
	BackendApiChooseList,
	BackendApiTagList,
	BackendApiTagChangeList,
	BackendApiFocus,
	BackendApiCancelFocus,
	BackendApiBinds,
	BackendApisaveBind,
	BackendApisendSms,
	BackendApiGetTopicList,
	BackendApiGetTopicHead,
	BackendApiGetTopicDetail,
	BackendApiGetTopicCommentList,
	BackendApiGetColumnDetails,
	BackendApiGetColumnComment,
	BackendApiGetZhuanlanList,
	BackendApiTopicmainikeLike,
	BackendApiTopicmainundLike,
	BackendApiunlikeComment,
	BackendApilikeComment,
	BackendApilikeArticle,
	BackendApunlikeArticle,
	BackendAtopcomment,
	BackendApipublishComment,
	BackendApiSixinList,
	BackendApiCommontList,
	BackendApiXitongList,
	BackendApiprivateLetter,
	BackendApisendLetter,
	BackendApimessageDetails,
	BackendApiwomenIndex,
	BackendApiwomanCook,
	BackendApiClassCon,
	BackendApiCateGoodsList
};
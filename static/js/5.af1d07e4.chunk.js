(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[5],{302:function(e,s,r){e.exports={btn:"Search_btn__20Wpd",search__body:"Search_search__body__1bY2S",search__label:"Search_search__label__2fc44",search__button:"Search_search__button__2qlg_",usersList__body:"Search_usersList__body__1Qttt",user:"Search_user__6noHM",user__body:"Search_user__body__1Lx-q",user__info:"Search_user__info__3Q3PC",user__avatar:"Search_user__avatar__1Ys0K",infoUser:"Search_infoUser__31Wdx",infoUser__name:"Search_infoUser__name__B2kY4",infoUser__age:"Search_infoUser__age__29lr7",infoUser__city:"Search_infoUser__city__37vpm"}},307:function(e,s,r){"use strict";r.r(s);var n=r(14),o=r(15),a=r(17),t=r(16),c=r(0),i=r.n(c),l=r(18),_=r(136),u=r(53),h=r.n(u),d=r(302),f=r.n(d),b=r(45),p=r(42),g=(r(104),r(20),r(1)),j=function(e){return Object(g.jsx)("div",{className:f.a.user,children:Object(g.jsxs)("div",{className:f.a.user__body,children:[Object(g.jsx)("div",{className:f.a.user__avatar,children:Object(g.jsx)(p.b,{to:"/profile/"+e.userInfo.id,children:Object(g.jsx)("img",{src:e.userInfo.photos.small||b.a,alt:""})})}),e.userInfo.followed?Object(g.jsx)("button",{disabled:e.followingInProgress.some((function(s){return s===e.userInfo.id})),type:"button",onClick:function(){return e.unfollow(e.userInfo.id)},className:f.a.user__btn+" "+f.a.btn,children:"Unfollow"}):Object(g.jsx)("button",{disabled:e.followingInProgress.some((function(s){return s===e.userInfo.id})),type:"button",onClick:function(){return e.follow(e.userInfo.id)},className:f.a.user__btn+" "+f.a.btn,children:"Follow"}),Object(g.jsxs)("div",{className:f.a.user__info+" "+f.a.infoUser,children:[Object(g.jsx)("div",{className:f.a.infoUser__name,children:e.userInfo.name}),Object(g.jsxs)("div",{className:f.a.infoUser__age,children:[e.userInfo.age," y.o."]}),Object(g.jsx)("div",{className:f.a.infoUser__city,children:e.userInfo.city})]})]})})},w=r(34),m=function(e){Object(a.a)(r,e);var s=Object(t.a)(r);function r(){return Object(n.a)(this,r),s.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(g.jsx)("section",{className:h.a.contentPage__search+" "+f.a.search,children:Object(g.jsxs)("div",{className:f.a.search__body,children:[Object(g.jsx)("div",{className:f.a.search__label,children:"Search List"}),Object(g.jsx)("div",{className:f.a.search__users+" "+f.a.usersList,children:Object(g.jsx)("div",{className:f.a.usersList__body,children:this.props.usersData.map((function(s){return Object(g.jsx)(j,{userInfo:s,follow:e.props.follow,unfollow:e.props.unfollow,toggleIsFollowing:e.props.toggleIsFollowing,followingInProgress:e.props.followingInProgress})}))})}),this.props.isFetching?Object(g.jsx)(w.a,{}):null,Object(g.jsx)("button",{onClick:this.props.downloadUsers,className:f.a.search__button+" "+f.a.btn,children:"Show More"})]})})}}]),r}(i.a.Component),O=r(103),y=r(13),U=function(e){Object(a.a)(r,e);var s=Object(t.a)(r);function r(){var e;Object(n.a)(this,r);for(var o=arguments.length,a=new Array(o),t=0;t<o;t++)a[t]=arguments[t];return(e=s.call.apply(s,[this].concat(a))).downloadUsers=function(){e.props.downloadUsers(e.props.currentDepth,e.props.displayingUsersAmount)},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentDepth,this.props.displayingUsersAmount)}},{key:"render",value:function(){return Object(g.jsx)(m,{usersData:this.props.usersData,follow:this.props.following,unfollow:this.props.unfollowing,downloadUsers:this.downloadUsers,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress})}}]),r}(i.a.Component);s.default=Object(y.d)(O.a,Object(l.b)((function(e){return{followingInProgress:e.searchPage.followingInProgress,usersData:e.searchPage.users,isFetching:e.searchPage.isFetching,currentDepth:e.searchPage.currentDepth,displayingUsersAmount:e.searchPage.displayingUsersAmount}}),{following:_.c,unfollowing:_.e,getUsers:_.d,downloadUsers:_.b}))(U)}}]);
//# sourceMappingURL=5.af1d07e4.chunk.js.map
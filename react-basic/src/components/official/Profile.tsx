const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

// JSX 比 HTML 更加严格。你必须闭合标签，如 <br />。你的组件也不能返回多个 JSX 标签。
// 你必须将它们包裹到一个共享的父级中，比如 <div>...</div> 或使用空的 <>...</> 包裹
export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

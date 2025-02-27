document.querySelector('.register').addEventListener('click', () => {
  const input = document.querySelector('.review input');

  if (input.value === '') {
    alert('댓글을 작성해주세요.');
    return;
  }

  const commentListEl = document.querySelector('.comment-list');
  const comment = document.createElement('li');
  comment.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span class="visitor">방문자</span>
        </div>
        <div class="comment-content">
          ${input.value}
        </div>
      </div>
  `;
  commentListEl.prepend(comment);

  input.value = '';
});

document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('.review input').value = '';
});

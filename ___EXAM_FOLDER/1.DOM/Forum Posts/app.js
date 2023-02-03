window.addEventListener("load", solve);

function solve() {
  let titleEl = document.getElementById('post-title');
  let categoryEl = document.getElementById('post-category');
  let contentEl = document.getElementById('post-content');
  let buttonpublishEl = document.getElementById('publish-btn');
  let ulReviewEl = document.getElementById('review-list');
  let clearButtonEl = document.getElementById('clear-btn');
  let ulPublishSectionEl = document.getElementById('published-list');

  

  let buttonEdit = document.createElement('button'); buttonEdit.className = 'action-btn edit';
  buttonEdit.textContent = 'EDIT';

  let buttonApprove = document.createElement('button'); buttonApprove.className = 'action-btn approve';
  buttonApprove.textContent = 'APPROVE';

  let categoryToReplace = 'Category: ';
  let contentToReplace = 'Content: ';


  buttonpublishEl.addEventListener('click', publish);
  buttonEdit.addEventListener('click', edit);
  buttonApprove.addEventListener('click', approve);
  clearButtonEl.addEventListener('click', clear);

  function publish() {

    let liElement = document.createElement('li'); liElement.className = 'rpost'
  ulReviewEl.appendChild(liElement);

  let article = document.createElement('article');
  liElement.appendChild(article);

  let h4Title = document.createElement('h4');
  let pCategory = document.createElement('p');
  let pContent = document.createElement('p');

    if (titleEl.value !== '' && categoryEl.value !== '' && contentEl.value !== '') {

      h4Title.textContent = titleEl.value;
      pCategory.textContent = categoryToReplace + categoryEl.value;
      pContent.textContent = contentToReplace + contentEl.value;
      titleEl.value = '';
      categoryEl.value = '';
      contentEl.value = '';
      article.appendChild(h4Title);
      article.appendChild(pCategory);
      article.appendChild(pContent);
      liElement.appendChild(buttonApprove);
      liElement.appendChild(buttonEdit);

    }
  }

  function edit() {

      liElement.removeChild(buttonApprove);
      liElement.removeChild(buttonEdit);
      titleEl.value = h4Title.textContent;
      categoryEl.value = pCategory.textContent.replace(categoryToReplace, "");
      contentEl.value = pContent.textContent.replace(contentToReplace, "");
      h4Title.textContent = '';
      pCategory.textContent = '';
      pContent.textContent = '';

  }


  function approve() {

    ulPublishSectionEl.appendChild(liElement);
    liElement.removeChild(buttonApprove)
    liElement.removeChild(buttonEdit)

  }

  function clear() {

    ulPublishSectionEl.removeChild(liElement)

  }

}

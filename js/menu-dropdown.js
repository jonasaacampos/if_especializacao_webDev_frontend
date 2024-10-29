$(document).ready(function() {
    $('#categoriesDropdown').dropdown();
});

// função de navegação que exibe somente livros da categria selecionada no menu
document.addEventListener('DOMContentLoaded', function() {
    const categoryMenu = document.getElementById('categoriesDropdown');
    const books = document.querySelectorAll('.dataFilter');

    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            const category = event.target.getAttribute('data-category');
            if (category) {
                books.forEach(function(book) {
                    if (category === 'all') {
                        book.style.display = 'block';
                    } else {
                        const tags = book.querySelectorAll('.tag');
                        let hasCategory = false;
                        tags.forEach(function(tag) {
                            if (tag.classList.contains(category)) {
                                hasCategory = true;
                            }
                        });
                        book.style.display = hasCategory ? 'block' : 'none';
                    }
                });
            }
        });
    });
});
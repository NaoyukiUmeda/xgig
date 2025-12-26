document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームのバリデーション
            const name = document.getElementById('name').value.trim();
            const furigana = document.getElementById('furigana').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const privacy = document.getElementById('privacy').checked;
            
            if (!name || !furigana || !email || !message) {
                alert('必須項目をすべて入力してください。');
                return;
            }
            
            if (!privacy) {
                alert('プライバシーポリシーに同意してください。');
                return;
            }
            
            // メールアドレスの形式チェック
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('正しいメールアドレスを入力してください。');
                return;
            }
            
            // 確認画面を表示
            showConfirmation();
        });
    }
});

function showConfirmation() {
    const name = document.getElementById('name').value;
    const furigana = document.getElementById('furigana').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value || '未入力';
    const message = document.getElementById('message').value;
    
    const confirmMessage = `
以下の内容でよろしいですか？

お名前: ${name}
ふりがな: ${furigana}
メールアドレス: ${email}
お電話番号: ${phone}
お問い合わせ内容:
${message}
    `;
    
    if (confirm(confirmMessage)) {
        // 実際の送信処理（バックエンドが必要）
        alert('お問い合わせを受け付けました。\n担当者より折り返しご連絡させていただきます。');
        
        // フォームをリセット
        document.getElementById('contactForm').reset();
        
        // トップページに戻る
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000);
    }
}

let subscriptions = [];

function addSubscription() {
  const name = document.getElementById('name').value;
  const type = document.getElementById('type').value;
  const cost = parseFloat(document.getElementById('cost').value);
  const paymentMethod = document.getElementById('payment-method').value;
  const billingPeriod = document.getElementById('billing-period').value;
  const billingDate = document.getElementById('billing-date').value;

  const newSubscription = {
    name,
    type,
    cost,
    paymentMethod,
    billingPeriod,
    billingDate,
  };

  subscriptions.push(newSubscription);
  updateSubscriptionList();
  clearForm();
}

function deleteSubscription(index) {
  subscriptions.splice(index, 1);
  updateSubscriptionList();
}

function editSubscription(index) {
  const subscription = subscriptions[index];

  // Create a form for editing
  const editForm = document.createElement('div');
  editForm.innerHTML = `
      <label for="edited-name">Name:</label>
      <input type="text" id="edited-name" value="${subscription.name}" required>

      <label for="edited-type">Subscription Type:</label>
      <input type="text" id="edited-type" value="${subscription.type}" required>

      <label for="edited-cost">Cost:</label>
      <input type="number" id="edited-cost" value="${subscription.cost}" required>

      <label for="edited-payment-method">Payment Method:</label>
      <input type="text" id="edited-payment-method" value="${subscription.paymentMethod}" required>

      <label for="edited-billing-period">Billing Period:</label>
      <input type="text" id="edited-billing-period" value="${subscription.billingPeriod}" required>

      <label for="edited-billing-date">Next Billing Date:</label>
      <input type="date" id="edited-billing-date" value="${subscription.billingDate}" required>

      <button onclick="updateSubscription(${index})">Save Changes</button>
  `;

  // Display the form in a dialog/modal
  const modal = createModal(editForm);
  document.body.appendChild(modal);
}

function updateSubscription(index) {
  const editedName = document.getElementById('edited-name').value;
  const editedType = document.getElementById('edited-type').value;
  const editedCost = parseFloat(document.getElementById('edited-cost').value);
  const editedPaymentMethod = document.getElementById('edited-payment-method').value;
  const editedBillingPeriod = document.getElementById('edited-billing-period').value;
  const editedBillingDate = document.getElementById('edited-billing-date').value;

  // Update the subscription with edited values
  subscriptions[index] = {
    name: editedName,
    type: editedType,
    cost: editedCost,
    paymentMethod: editedPaymentMethod,
    billingPeriod: editedBillingPeriod,
    billingDate: editedBillingDate,
  };

  // Update the subscription list and close the modal
  updateSubscriptionList();
  closeAndRemoveModal();
}

function createModal(content) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.appendChild(content);
  return modal;
}

function closeAndRemoveModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.remove();
  }
}

function updateSubscriptionList() {
  const subscriptionList = document.getElementById('subscription-list');
  subscriptionList.innerHTML = '';

  subscriptions.forEach((subscription, index) => {
    const card = document.createElement('div');
    card.classList.add('subscription-card');

    const content = `
            <p><strong>Name:</strong> ${subscription.name}</p>
            <p><strong>Type:</strong> ${subscription.type}</p>
            <p><strong>Cost:</strong> $${subscription.cost}</p>
            <p><strong>Payment Method:</strong> ${subscription.paymentMethod}</p>
            <p><strong>Billing Period:</strong> ${subscription.billingPeriod}</p>
            <p><strong>Next Billing Date:</strong> ${subscription.billingDate}</p>
            <button onclick="deleteSubscription(${index})">Delete</button>
            <button onclick="editSubscription(${index})">Edit</button>
        `;

    card.innerHTML = content;
    subscriptionList.appendChild(card);
  });
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('type').value = '';
  document.getElementById('cost').value = '';
  document.getElementById('payment-method').value = '';
  document.getElementById('billing-period').value = '';
  document.getElementById('billing-date').value = '';
}

// Initialize with some sample data
subscriptions.push({
  name: 'Netflix',
  type: 'Streaming',
  cost: 12.99,
  paymentMethod: 'Credit Card',
  billingPeriod: 'Monthly',
  billingDate: '2024-01-15',
});

updateSubscriptionList();

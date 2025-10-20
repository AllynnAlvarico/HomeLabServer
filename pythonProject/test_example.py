import pandas as pd
import matplotlib.pyplot as plt
sales = pd.read_csv('Sales.csv')
customers = pd.read_csv('Customers.csv')
mergedData = pd.merge(sales, customers, on='customer_id', how='left')
# print(merged.head().to_string())
# print(merged.to_csv('Merged.csv'))
# filter_payment_method = sales[(sales['payment_method'] == 'Cash') &(sales['status'] == 'Pending') &(sales['quantity'] > 50) & (sales['total_price'] < 1000)]
# print(filter_payment_method.to_string())
# print(len(filter_payment_method))
# filter_payment_method.to_csv('Filtered_Sales.csv')

mergedData['purchased_count'] = mergedData.groupby('customer_id')['customer_id'].transform('count')
filteredData = mergedData[['customer_id', 'purchased_count']].drop_duplicates()
print(filteredData.to_string())
newFilteredData = filteredData[filteredData['purchased_count'] >= 4]
print(len(newFilteredData))
print(newFilteredData.to_string())
top_customers = mergedData.groupby('customer_id')['order_id'].count().sort_values(ascending=False).head(10)
top_customers.plot(kind='bar')
plt.xlabel('Customer ID')
plt.ylabel('Number of Purchases')
plt.title('Top 10 Customers by Purchase Count')
plt.show()
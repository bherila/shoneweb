import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type AddPaymentMethodDto = {
  addressId: Scalars['String']
  cvc: Scalars['String']
  cardNumber: Scalars['String']
  expiryDate: Scalars['String']
  cardName: Scalars['String']
}

export type Address = {
  __typename?: 'Address'
  id: Scalars['String']
  city: Scalars['String']
  country: Scalars['String']
  line1: Scalars['String']
  line2: Scalars['String']
  postal_code: Scalars['String']
  state: Scalars['String']
  name: Scalars['String']
  phone: Scalars['String']
  is_deleted: Scalars['Boolean']
}

export type Brand = {
  __typename?: 'Brand'
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
  showSegments?: Maybe<Array<ShowSegment>>
  userBrandRoles?: Maybe<Array<UserBrandRole>>
  ownerUser: User
}

export type ConsumerLead = {
  __typename?: 'ConsumerLead'
  id: Scalars['String']
  email: Scalars['String']
  submitted_timestamp: Scalars['DateTime']
}

export type CreateAddressDto = {
  userId: Scalars['String']
  city: Scalars['String']
  country: Scalars['String']
  line1: Scalars['String']
  line2: Scalars['String']
  postalCode: Scalars['String']
  state: Scalars['String']
  name: Scalars['String']
  phone: Scalars['String']
}

export type CreateBrandDto = {
  name: Scalars['String']
  description: Scalars['String']
}

export type CreateLineItemsDto = {
  orderId: Scalars['String']
  skuId: Scalars['String']
  amount: Scalars['Float']
}

export type CreateProductDto = {
  showSegmentId?: Maybe<Scalars['String']>
  brandId?: Maybe<Scalars['String']>
  name: Scalars['String']
  description: Scalars['String']
  variantData: CreateVariantDto
}

export type CreateShowDto = {
  title: Scalars['String']
  imageUrl: Scalars['String']
  startDate: Scalars['DateTime']
  endDate: Scalars['DateTime']
}

export type CreateShowSegmentDto = {
  showId: Scalars['String']
  brandId: Scalars['String']
  title: Scalars['String']
  productsIds: Array<Scalars['String']>
}

export type CreateShowWithSegmentDto = {
  brandId: Scalars['String']
  title: Scalars['String']
  imageUrl: Scalars['String']
  startDate: Scalars['DateTime']
  endDate: Scalars['DateTime']
  showSegment: ShowSegmentDto
}

export type CreateSkuDto = {
  variantId?: Maybe<Scalars['String']>
  name: Scalars['String']
  COGS: Scalars['String']
  friendlyName: Scalars['String']
  stock: Scalars['Float']
}

export type CreateUserBrandRoleDto = {
  brandId: Scalars['String']
  userId: Scalars['String']
  read: Scalars['Boolean']
  write: Scalars['Boolean']
  admin: Scalars['Boolean']
}

export type CreateUserShowRoleDto = {
  showId: Scalars['String']
  userId: Scalars['String']
  read: Scalars['Boolean']
  write: Scalars['Boolean']
  admin: Scalars['Boolean']
  streamTo: Scalars['Boolean']
}

export type CreateVariantDto = {
  productId?: Maybe<Scalars['String']>
  name: Scalars['String']
  description: Scalars['String']
  skuData: CreateSkuDto
}

export type CreateorderDto = {
  showSegmentId: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
}

export type DeleteAddessOutputDto = {
  __typename?: 'DeleteAddessOutputDto'
  msg: Scalars['String']
}

export type DeletePaymentMethodOutputDto = {
  __typename?: 'DeletePaymentMethodOutputDto'
  msg: Scalars['String']
}

export type LineItem = {
  __typename?: 'LineItem'
  id: Scalars['String']
  amount: Scalars['Float']
  order: Order
  sku: Sku
}

export type MessageEntity = {
  __typename?: 'MessageEntity'
  id: Scalars['String']
  timestamp: Scalars['DateTime']
  message: Scalars['String']
  alias: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  add_address: Address
  delete_address: DeleteAddessOutputDto
  addBrand: Brand
  updateBrand: Brand
  addConsumerLead: ConsumerLead
  add_message: MessageEntity
  addLineItems: LineItem
  updateLineItems: LineItem
  addOrder: Order
  updateOrder: Order
  addProduct: Product
  update_product: Product
  addVariant: Variant
  update_variant: Variant
  addSku: Sku
  updateSku: Sku
  add_payment: Payment
  add_show: Show
  addShowWithSegment: Show
  create_or_update_show_stream: Show
  addShowSegment: ShowSegment
  updateShowSegment: ShowSegment
  add_show_your_style_entry: ShowYourStyleEntry
  add_video_id_from_transloadit: ShowYourStyleVideoIdEntry
  add_show_your_style_vote: ShowYourStyleVote
  add_show_your_style_view_record: ShowYourStyleViewRecord
  add_user: Scalars['String']
  update_user: User
  add_userbrandrole: UserBrandRole
  update_userbrandrole: UserBrandRole
  add_usershowrole: UserShowRole
  update_usershowrole: UserShowRole
  deactivate_video: ShowYourStyleVideoIdEntry
  add_payment_method: PaymentMethodEntity
  delete_payment_method: DeletePaymentMethodOutputDto
}

export type MutationAdd_AddressArgs = {
  data: CreateAddressDto
}

export type MutationDelete_AddressArgs = {
  id: Scalars['String']
}

export type MutationAddBrandArgs = {
  data: CreateBrandDto
}

export type MutationUpdateBrandArgs = {
  data: UpdateBrandDto
}

export type MutationAddConsumerLeadArgs = {
  email: Scalars['String']
}

export type MutationAdd_MessageArgs = {
  message: Scalars['String']
  showId: Scalars['String']
}

export type MutationAddLineItemsArgs = {
  data: CreateLineItemsDto
}

export type MutationUpdateLineItemsArgs = {
  data: UpdateLineItemsDto
}

export type MutationAddOrderArgs = {
  data: CreateorderDto
}

export type MutationUpdateOrderArgs = {
  data: UpdateorderDto
}

export type MutationAddProductArgs = {
  data: CreateProductDto
}

export type MutationUpdate_ProductArgs = {
  data: UpdateProductDto
}

export type MutationAddVariantArgs = {
  data: CreateVariantDto
}

export type MutationUpdate_VariantArgs = {
  data: UpdateVariantDto
}

export type MutationAddSkuArgs = {
  data: CreateSkuDto
}

export type MutationUpdateSkuArgs = {
  data: UpdateSkuDto
}

export type MutationAdd_PaymentArgs = {
  quantity: Scalars['String']
  productId: Scalars['String']
}

export type MutationAdd_ShowArgs = {
  data: CreateShowDto
}

export type MutationAddShowWithSegmentArgs = {
  data: CreateShowWithSegmentDto
}

export type MutationCreate_Or_Update_Show_StreamArgs = {
  id: Scalars['String']
}

export type MutationAddShowSegmentArgs = {
  data: CreateShowSegmentDto
}

export type MutationUpdateShowSegmentArgs = {
  data: UpdateShowSegmentDto
}

export type MutationAdd_Show_Your_Style_EntryArgs = {
  videoUrl: Scalars['String']
}

export type MutationAdd_Video_Id_From_TransloaditArgs = {
  videoId: Scalars['String']
}

export type MutationAdd_Show_Your_Style_VoteArgs = {
  entryId: Scalars['String']
  viewDuration: Scalars['Float']
  vote: Scalars['Float']
}

export type MutationAdd_Show_Your_Style_View_RecordArgs = {
  entryId: Scalars['String']
}

export type MutationAdd_UserArgs = {
  phone: Scalars['String']
}

export type MutationUpdate_UserArgs = {
  user: UpdateUserEntityDto
}

export type MutationAdd_UserbrandroleArgs = {
  data: CreateUserBrandRoleDto
}

export type MutationUpdate_UserbrandroleArgs = {
  data: UpdateUserBrandRoleDto
}

export type MutationAdd_UsershowroleArgs = {
  data: CreateUserShowRoleDto
}

export type MutationUpdate_UsershowroleArgs = {
  data: UpdateUserShowRoleDto
}

export type MutationDeactivate_VideoArgs = {
  videoId: Scalars['String']
}

export type MutationAdd_Payment_MethodArgs = {
  addPaymentDetails: AddPaymentMethodDto
}

export type MutationDelete_Payment_MethodArgs = {
  id: Scalars['String']
}

export type Order = {
  __typename?: 'Order'
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
  user: User
  showSegment: ShowSegment
  lineItems?: Maybe<Array<LineItem>>
}

export type PaginationQueryDto = {
  limit: Scalars['Float']
  offset: Scalars['Float']
}

export type Payment = {
  __typename?: 'Payment'
  id: Scalars['String']
  product: Product
  user: User
  quantity: Scalars['Float']
}

export type PaymentMethodEntity = {
  __typename?: 'PaymentMethodEntity'
  id: Scalars['ID']
  timestamp: Scalars['DateTime']
  paymentMethodId: Scalars['String']
  addressId: Scalars['String']
  cardName: Scalars['String']
  is_deleted: Scalars['Boolean']
  is_default: Scalars['Boolean']
}

export type Product = {
  __typename?: 'Product'
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
  user: User
  showSegments?: Maybe<Array<ShowSegment>>
  brand?: Maybe<Brand>
  variants?: Maybe<Array<Variant>>
}

export type Query = {
  __typename?: 'Query'
  address?: Maybe<Address>
  addresses: Array<Address>
  brand?: Maybe<Brand>
  brands: Array<Brand>
  my_brands: Array<Brand>
  consumerLead?: Maybe<ConsumerLead>
  consumerLeads: Array<ConsumerLead>
  messageEntity?: Maybe<MessageEntity>
  messageEntities: Array<MessageEntity>
  lineItem?: Maybe<LineItem>
  lineItems: Array<LineItem>
  orderLineItems: Array<LineItem>
  order?: Maybe<Order>
  orders: Array<Order>
  myOrders: Array<Order>
  product?: Maybe<Product>
  products: Array<Product>
  myProducts: Array<Product>
  brandProducts: Array<Product>
  showProducts: Array<Product>
  variant?: Maybe<Variant>
  variants: Array<Variant>
  brandVariants: Array<Variant>
  sku?: Maybe<Sku>
  skus: Array<Sku>
  variantSkus: Array<Sku>
  payment?: Maybe<Payment>
  payments: Array<Payment>
  show?: Maybe<Show>
  shows: Array<Show>
  brandShows: Array<Show>
  active_shows: Array<Show>
  showSegment?: Maybe<ShowSegment>
  showSegments: Array<ShowSegment>
  showSegmentByBrandAndShow: Array<ShowSegment>
  show_your_style_Entry?: Maybe<ShowYourStyleEntry>
  get_random_show_your_style_entry?: Maybe<ShowYourStyleEntry>
  show_your_style_entries: Array<ShowYourStyleEntry>
  show_your_style_vote?: Maybe<ShowYourStyleVote>
  show_your_style_votes: Array<ShowYourStyleVote>
  show_your_style_view_record?: Maybe<ShowYourStyleViewRecord>
  show_your_style_view_records: Array<ShowYourStyleViewRecord>
  user?: Maybe<User>
  users: Array<User>
  verify_code: User
  userbrandrole?: Maybe<UserBrandRole>
  userbrandroles: Array<UserBrandRole>
  my_userbrandroles: Array<UserBrandRole>
  usershowrole?: Maybe<UserShowRole>
  usershowroles: Array<UserShowRole>
  my_usershowroles: Array<UserShowRole>
  payment_methods: Array<PaymentMethodEntity>
}

export type QueryAddressArgs = {
  addressId: Scalars['String']
}

export type QueryBrandArgs = {
  brandId: Scalars['String']
}

export type QueryBrandsArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryMy_BrandsArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryConsumerLeadArgs = {
  consumerLeadId: Scalars['String']
}

export type QueryConsumerLeadsArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryMessageEntityArgs = {
  messageEntityId: Scalars['String']
}

export type QueryLineItemArgs = {
  lineitemsId: Scalars['String']
}

export type QueryLineItemsArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryOrderLineItemsArgs = {
  paginationQuery: PaginationQueryDto
  orderId: Scalars['String']
}

export type QueryOrderArgs = {
  orderId: Scalars['String']
}

export type QueryOrdersArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryMyOrdersArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryProductArgs = {
  productId: Scalars['String']
}

export type QueryProductsArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryMyProductsArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryBrandProductsArgs = {
  paginationQuery: PaginationQueryDto
  brandId: Scalars['String']
}

export type QueryShowProductsArgs = {
  paginationQuery: PaginationQueryDto
  showId: Scalars['String']
}

export type QueryVariantArgs = {
  variantId: Scalars['String']
}

export type QueryVariantsArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryBrandVariantsArgs = {
  paginationQuery: PaginationQueryDto
  productId: Scalars['String']
}

export type QuerySkuArgs = {
  skuId: Scalars['String']
}

export type QuerySkusArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryVariantSkusArgs = {
  paginationQuery: PaginationQueryDto
  variantId: Scalars['String']
}

export type QueryPaymentArgs = {
  PaymentId: Scalars['String']
}

export type QueryShowArgs = {
  showId: Scalars['String']
}

export type QueryBrandShowsArgs = {
  paginationQuery: PaginationQueryDto
  brandId: Scalars['String']
}

export type QueryShowSegmentArgs = {
  showsegmentId: Scalars['String']
}

export type QueryShowSegmentByBrandAndShowArgs = {
  showId: Scalars['String']
  brandId: Scalars['String']
}

export type QueryShow_Your_Style_EntryArgs = {
  showId: Scalars['String']
}

export type QueryShow_Your_Style_EntriesArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryShow_Your_Style_VoteArgs = {
  showId: Scalars['String']
}

export type QueryShow_Your_Style_VotesArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryShow_Your_Style_View_RecordArgs = {
  showId: Scalars['String']
}

export type QueryShow_Your_Style_View_RecordsArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryUserArgs = {
  userId: Scalars['String']
}

export type QueryVerify_CodeArgs = {
  code: Scalars['String']
  phone: Scalars['String']
}

export type QueryUserbrandroleArgs = {
  userbrandroleId: Scalars['String']
}

export type QueryUserbrandrolesArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryMy_UserbrandrolesArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryUsershowroleArgs = {
  usershowroleId: Scalars['String']
}

export type QueryUsershowrolesArgs = {
  paginationQuery: PaginationQueryDto
}

export type QueryMy_UsershowrolesArgs = {
  paginationQuery: PaginationQueryDto
}

export type Show = {
  __typename?: 'Show'
  id: Scalars['ID']
  title: Scalars['String']
  image_url?: Maybe<Scalars['String']>
  start_date: Scalars['DateTime']
  end_date: Scalars['DateTime']
  chatMessages?: Maybe<Array<MessageEntity>>
  showSegments?: Maybe<Array<ShowSegment>>
  userShowRoles?: Maybe<Array<UserShowRole>>
  owner_user: User
  is_broadcasting: Scalars['Boolean']
}

export type ShowSegment = {
  __typename?: 'ShowSegment'
  id: Scalars['String']
  title: Scalars['String']
  brand: Brand
  show: Show
  ownerUser: User
  products: Array<Product>
  orders?: Maybe<Array<Order>>
}

export type ShowSegmentDto = {
  title: Scalars['String']
  productsIds: Array<Scalars['String']>
}

export type ShowYourStyleEntry = {
  __typename?: 'ShowYourStyleEntry'
  id: Scalars['String']
  user: User
  video_url: Scalars['String']
  submitted_timestamp: Scalars['DateTime']
}

export type ShowYourStyleVideoIdEntry = {
  __typename?: 'ShowYourStyleVideoIdEntry'
  entry_id: Scalars['Float']
  user: User
  video_id: Scalars['String']
  entry_timestamp: Scalars['DateTime']
  video_url?: Maybe<Scalars['String']>
  is_viewable: Scalars['Boolean']
  error?: Maybe<Scalars['String']>
  json_data?: Maybe<Scalars['String']>
  urls?: Maybe<Scalars['String']>
  inactive_date?: Maybe<Scalars['DateTime']>
}

export type ShowYourStyleViewRecord = {
  __typename?: 'ShowYourStyleViewRecord'
  id: Scalars['String']
  entry: ShowYourStyleEntry
  user: User
  view_time: Scalars['DateTime']
}

export type ShowYourStyleVote = {
  __typename?: 'ShowYourStyleVote'
  id: Scalars['String']
  entry: ShowYourStyleEntry
  user: User
  vote: Scalars['Float']
  view_duration: Scalars['Float']
}

export type Sku = {
  __typename?: 'Sku'
  id: Scalars['String']
  name: Scalars['String']
  friendlyName: Scalars['String']
  COGS: Scalars['String']
  stock: Scalars['Float']
  variant: Variant
  skus?: Maybe<Array<LineItem>>
}

export type UpdateBrandDto = {
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
}

export type UpdateLineItemsDto = {
  id: Scalars['String']
  amount: Scalars['Float']
}

export type UpdateProductDto = {
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
}

export type UpdateShowSegmentDto = {
  id: Scalars['String']
  title: Scalars['String']
}

export type UpdateSkuDto = {
  id: Scalars['String']
  friendlyName: Scalars['String']
  COGS: Scalars['String']
  stock: Scalars['Float']
}

export type UpdateUserBrandRoleDto = {
  id: Scalars['String']
  read: Scalars['Boolean']
  write: Scalars['Boolean']
  admin: Scalars['Boolean']
}

export type UpdateUserEntityDto = {
  id: Scalars['String']
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  file?: Maybe<Scalars['Upload']>
}

export type UpdateUserShowRoleDto = {
  id: Scalars['String']
  read: Scalars['Boolean']
  write: Scalars['Boolean']
  admin: Scalars['Boolean']
  stream_to: Scalars['Boolean']
}

export type UpdateVariantDto = {
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
}

export type UpdateorderDto = {
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  email?: Maybe<Scalars['String']>
  phone: Scalars['String']
  username?: Maybe<Scalars['String']>
  verification_code_time_sent: Scalars['String']
  token?: Maybe<Scalars['String']>
  profileUrl?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
}

export type UserBrandRole = {
  __typename?: 'UserBrandRole'
  id: Scalars['String']
  read: Scalars['Boolean']
  write: Scalars['Boolean']
  admin: Scalars['Boolean']
  user: User
  brand: Brand
}

export type UserShowRole = {
  __typename?: 'UserShowRole'
  id: Scalars['String']
  read: Scalars['Boolean']
  write: Scalars['Boolean']
  admin: Scalars['Boolean']
  stream_to: Scalars['Boolean']
  user: User
  show: Show
}

export type Variant = {
  __typename?: 'Variant'
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
  product: Product
  skus?: Maybe<Array<Sku>>
}

export type AddAddressMutationVariables = Exact<{
  address: CreateAddressDto
}>

export type AddAddressMutation = { __typename?: 'Mutation' } & {
  add_address: { __typename?: 'Address' } & Pick<
    Address,
    | 'id'
    | 'city'
    | 'country'
    | 'line1'
    | 'line2'
    | 'postal_code'
    | 'state'
    | 'name'
    | 'phone'
    | 'is_deleted'
  >
}

export type AddMessageMutationVariables = Exact<{
  message: Scalars['String']
  showID: Scalars['String']
}>

export type AddMessageMutation = { __typename?: 'Mutation' } & {
  add_message: { __typename?: 'MessageEntity' } & Pick<
    MessageEntity,
    'id' | 'timestamp' | 'message' | 'alias'
  >
}

export type AddUserMutationVariables = Exact<{
  phone: Scalars['String']
}>

export type AddUserMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'add_user'
>

export type UpdateUserMutationVariables = Exact<{
  user: UpdateUserEntityDto
}>

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  update_user: { __typename?: 'User' } & Pick<
    User,
    | 'email'
    | 'id'
    | 'phone'
    | 'profileUrl'
    | 'token'
    | 'username'
    | 'verification_code_time_sent'
  >
}

export type GetShowQueryVariables = Exact<{
  ID: Scalars['String']
}>

export type GetShowQuery = { __typename?: 'Query' } & {
  show?: Maybe<
    { __typename?: 'Show' } & Pick<
      Show,
      'id' | 'title' | 'image_url' | 'start_date' | 'end_date'
    > & {
        chatMessages?: Maybe<
          Array<
            { __typename: 'MessageEntity' } & Pick<
              MessageEntity,
              'id' | 'timestamp' | 'message' | 'alias'
            >
          >
        >
      }
  >
}

export type GetShowsQueryVariables = Exact<{ [key: string]: never }>

export type GetShowsQuery = { __typename?: 'Query' } & {
  shows: Array<
    { __typename?: 'Show' } & Pick<Show, 'id' | 'title' | 'image_url'> & {
        chatMessages?: Maybe<
          Array<
            { __typename?: 'MessageEntity' } & Pick<
              MessageEntity,
              'id' | 'message' | 'alias'
            >
          >
        >
      }
  >
}

export type VerifyCodeQueryVariables = Exact<{
  code: Scalars['String']
  phone: Scalars['String']
}>

export type VerifyCodeQuery = { __typename?: 'Query' } & {
  verify_code: { __typename?: 'User' } & Pick<
    User,
    | 'id'
    | 'email'
    | 'phone'
    | 'username'
    | 'verification_code_time_sent'
    | 'token'
    | 'profileUrl'
  >
}

export const AddAddressDocument = gql`
  mutation AddAddress($address: CreateAddressDto!) {
    add_address(data: $address) {
      id
      city
      country
      line1
      line2
      postal_code
      state
      name
      phone
      is_deleted
    }
  }
`
export type AddAddressMutationFn = Apollo.MutationFunction<
  AddAddressMutation,
  AddAddressMutationVariables
>

/**
 * __useAddAddressMutation__
 *
 * To run a mutation, you first call `useAddAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAddressMutation, { data, loading, error }] = useAddAddressMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddAddressMutation,
    AddAddressMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddAddressMutation, AddAddressMutationVariables>(
    AddAddressDocument,
    options,
  )
}
export type AddAddressMutationHookResult = ReturnType<
  typeof useAddAddressMutation
>
export type AddAddressMutationResult = Apollo.MutationResult<AddAddressMutation>
export type AddAddressMutationOptions = Apollo.BaseMutationOptions<
  AddAddressMutation,
  AddAddressMutationVariables
>
export const AddMessageDocument = gql`
  mutation AddMessage($message: String!, $showID: String!) {
    add_message(message: $message, showId: $showID) {
      id
      timestamp
      message
      alias
    }
  }
`
export type AddMessageMutationFn = Apollo.MutationFunction<
  AddMessageMutation,
  AddMessageMutationVariables
>

/**
 * __useAddMessageMutation__
 *
 * To run a mutation, you first call `useAddMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMessageMutation, { data, loading, error }] = useAddMessageMutation({
 *   variables: {
 *      message: // value for 'message'
 *      showID: // value for 'showID'
 *   },
 * });
 */
export function useAddMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddMessageMutation,
    AddMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddMessageMutation, AddMessageMutationVariables>(
    AddMessageDocument,
    options,
  )
}
export type AddMessageMutationHookResult = ReturnType<
  typeof useAddMessageMutation
>
export type AddMessageMutationResult = Apollo.MutationResult<AddMessageMutation>
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<
  AddMessageMutation,
  AddMessageMutationVariables
>
export const AddUserDocument = gql`
  mutation AddUser($phone: String!) {
    add_user(phone: $phone)
  }
`
export type AddUserMutationFn = Apollo.MutationFunction<
  AddUserMutation,
  AddUserMutationVariables
>

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUserDocument,
    options,
  )
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>
export const UpdateUserDocument = gql`
  mutation UpdateUser($user: UpdateUserEntityDto!) {
    update_user(user: $user) {
      email
      id
      phone
      profileUrl
      token
      username
      verification_code_time_sent
    }
  }
`
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  )
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>
export const GetShowDocument = gql`
  query GetShow($ID: String!) {
    show(showId: $ID) {
      id
      title
      image_url
      start_date
      end_date
      chatMessages {
        id
        timestamp
        message
        alias
        __typename
      }
    }
  }
`

/**
 * __useGetShowQuery__
 *
 * To run a query within a React component, call `useGetShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShowQuery({
 *   variables: {
 *      ID: // value for 'ID'
 *   },
 * });
 */
export function useGetShowQuery(
  baseOptions: Apollo.QueryHookOptions<GetShowQuery, GetShowQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetShowQuery, GetShowQueryVariables>(
    GetShowDocument,
    options,
  )
}
export function useGetShowLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShowQuery,
    GetShowQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetShowQuery, GetShowQueryVariables>(
    GetShowDocument,
    options,
  )
}
export type GetShowQueryHookResult = ReturnType<typeof useGetShowQuery>
export type GetShowLazyQueryHookResult = ReturnType<typeof useGetShowLazyQuery>
export type GetShowQueryResult = Apollo.QueryResult<
  GetShowQuery,
  GetShowQueryVariables
>
export const GetShowsDocument = gql`
  query GetShows {
    shows {
      id
      title
      image_url
      chatMessages {
        id
        message
        alias
      }
    }
  }
`

/**
 * __useGetShowsQuery__
 *
 * To run a query within a React component, call `useGetShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShowsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetShowsQuery, GetShowsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetShowsQuery, GetShowsQueryVariables>(
    GetShowsDocument,
    options,
  )
}
export function useGetShowsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShowsQuery,
    GetShowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetShowsQuery, GetShowsQueryVariables>(
    GetShowsDocument,
    options,
  )
}
export type GetShowsQueryHookResult = ReturnType<typeof useGetShowsQuery>
export type GetShowsLazyQueryHookResult = ReturnType<
  typeof useGetShowsLazyQuery
>
export type GetShowsQueryResult = Apollo.QueryResult<
  GetShowsQuery,
  GetShowsQueryVariables
>
export const VerifyCodeDocument = gql`
  query VerifyCode($code: String!, $phone: String!) {
    verify_code(code: $code, phone: $phone) {
      id
      email
      phone
      username
      verification_code_time_sent
      token
      profileUrl
    }
  }
`

/**
 * __useVerifyCodeQuery__
 *
 * To run a query within a React component, call `useVerifyCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useVerifyCodeQuery(
  baseOptions: Apollo.QueryHookOptions<
    VerifyCodeQuery,
    VerifyCodeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<VerifyCodeQuery, VerifyCodeQueryVariables>(
    VerifyCodeDocument,
    options,
  )
}
export function useVerifyCodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VerifyCodeQuery,
    VerifyCodeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<VerifyCodeQuery, VerifyCodeQueryVariables>(
    VerifyCodeDocument,
    options,
  )
}
export type VerifyCodeQueryHookResult = ReturnType<typeof useVerifyCodeQuery>
export type VerifyCodeLazyQueryHookResult = ReturnType<
  typeof useVerifyCodeLazyQuery
>
export type VerifyCodeQueryResult = Apollo.QueryResult<
  VerifyCodeQuery,
  VerifyCodeQueryVariables
>
